import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
  } from '@angular/router';
  import { Plank } from './plank.model';
  import { Injectable } from '@angular/core';
  import { PlankDataService } from './plank-data.service';
  import { Observable } from 'rxjs';
  
  @Injectable({
    providedIn: 'root'
  })
  export class PlankResolver implements Resolve<Plank> {
    constructor(private PlankService: PlankDataService) {}
  
    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<Plank> {
      return this.PlankService.getPlank$(route.params['id']);
    }
  }