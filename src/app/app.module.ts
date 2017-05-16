import {HttpService} from './http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpCacheComponent } from './http-cache/http-cache.component';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/Rx';
import { PitfallCatchComponent } from './pitfall-catch/pitfall-catch.component';

const appRoutes: Routes = [
  { path: 'http-cache', component: HttpCacheComponent },
  { path: 'pitfall-catch', component: PitfallCatchComponent },
  { path: '', redirectTo: 'pitfall-catch', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    HttpCacheComponent,
    PitfallCatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
