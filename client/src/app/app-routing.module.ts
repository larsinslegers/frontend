import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './plank/page-not-found/page-not-found.component';
import { SelectivePreloadStrategy } from './SelectivePreloadStrategy';




const appRoutes: Routes = [
  {
    path: 'cuttingboard',
    loadChildren: () =>
      import('./plank/plank.module').then(mod => mod.PlankModule), data: {preload: true}
  },
  { path: '', redirectTo: 'cuttingboard/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: SelectivePreloadStrategy})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
