import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, of, Subject, merge } from 'rxjs';
import { PlankDataService } from '../plank-data.service';
import { Plank } from '../plank.model';
import { catchError, debounceTime, distinctUntilChanged, scan } from 'rxjs/operators';

@Component({
  selector: 'app-plank-list',
  templateUrl: './plank-list.component.html',
  styleUrls: ['./plank-list.component.css']
})
export class PlankListComponent implements OnInit {
  public filterPlankName: string;
  public filterPlank$ = new Subject<string>();
  private _fetchPlanken$ = this._plankDataService.planken$;
  public errorMessage: string="";

  constructor(private _plankDataService: PlankDataService) {
    this.filterPlank$.pipe(distinctUntilChanged(),debounceTime(400)).subscribe((waarde: string )=> (this.filterPlankName = waarde));
    this._fetchPlanken$ = this._plankDataService.allPlanken$.pipe(catchError(err => 
      {this.errorMessage = err; 
        return EMPTY;}));
  }
 

  get planken$() : Observable<Plank[]>{
    return this._fetchPlanken$;
  }

  /*addNewPlank(plank: Plank) {
    this._plankDataService.addNewPlank(plank);
  }*/

  ngOnInit(): void {
    this._fetchPlanken$ = this._plankDataService.allPlanken$.pipe(catchError(
      err => {
        this.errorMessage = err;
        return EMPTY;
      }
    ));
  }

}
