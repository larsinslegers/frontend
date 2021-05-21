import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Plank } from './plank.model';

@Injectable({
  providedIn: 'root'
})
export class PlankDataService {
  private _planken$ = new BehaviorSubject<Plank[]>([]);
  private _planken: Plank[];
 
  constructor(private http: HttpClient) {
    this.planken$
      .pipe(
        catchError((err) => {
          // temporary fix, while we use the behaviorsubject as a cache stream
          this._planken$.error(err);
          return throwError(err);
        })
      )
      .subscribe((p: Plank[]) => {
        this._planken = p;
        this._planken$.next(this._planken);
      });
   }
  
  getPlank$(id: string): Observable<Plank> {
    return this.http
      .get(`${environment.apiUrl}/cuttingboards/${id}`)
      .pipe(catchError(this.handleError), map(Plank.fromJSON)); 
  }


  get planken$():Observable<Plank[]>{
    return  this.http.
    get(`${environment.apiUrl}/cuttingboards`)
    .pipe(
      catchError(this.handleError),
      map((list: any[]) => list.map(Plank.fromJSON)));
  }

  get allPlanken$(): BehaviorSubject<Plank[]>{
    return this._planken$;
  }

  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err instanceof HttpErrorResponse) {
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = `an unknown error occurred ${err}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  addNewPlank(plank: Plank){
    return this.http
    .post(`${environment.apiUrl}/cuttingboards`, plank.toJSON())
    .pipe(catchError(this.handleError), map (Plank.fromJSON))
    .pipe(// temporary fix, while we use the behaviorsubject as a cache stream
      catchError((err) => {
        this._planken$.error(err);
        return throwError(err);
      }),
      tap((rec: Plank) => {
        this._planken = [...this._planken, rec];
        this._planken$.next(this._planken);
      }));
    
  }

  deletePlank(plank: Plank) {
    return this.http
      .delete(`${environment.apiUrl}/cuttingboards/${plank.id}`)
      .pipe(tap(console.log), catchError(this.handleError))
      .subscribe(() => this._planken$.next(this._planken));
  }

}
