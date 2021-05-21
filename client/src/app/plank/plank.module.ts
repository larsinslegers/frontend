import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlankComponent } from './plank/plank.component';
import { TagComponent } from './tag/tag.component';
import { MaterialModule } from './../material/material.module';
import { PlankListComponent } from './plank-list/plank-list.component';
import { AddPlankComponent } from './add-plank/add-plank.component';
import { PlankFilterPipe } from './plank-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ThanksComponent } from './thanks/thanks.component';
import { PlankDetailComponent } from './plank/plank-detail/plank-detail.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { RouterModule, Routes } from '@angular/router';
import { PlankResolver } from './PlankResolver';

const appRoutes: Routes = [
  { path: 'list', component: PlankListComponent },
  { path: 'add', component: AddPlankComponent }, 
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'thanks', component:ThanksComponent},
  { path: 'detail/:id', component:PlankDetailComponent, resolve: {plank: PlankResolver}},
];

@NgModule({
  declarations: [PlankComponent, TagComponent, PlankListComponent, AddPlankComponent, PlankFilterPipe, ContactComponent, HomeComponent, PageNotFoundComponent, ThanksComponent, PlankDetailComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, MaterialModule,YouTubePlayerModule, RouterModule.forChild(appRoutes)],
  exports: [PlankListComponent, AddPlankComponent,ContactComponent,HomeComponent,PageNotFoundComponent,ThanksComponent]
})
export class PlankModule { }
