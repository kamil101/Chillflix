import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { SafePipe } from './shered/safe.pipe';
import { MainComponent } from './main/main.component';
import { LiveComponent } from './live/live.component';
import { CategoryComponent } from './category/category.component';
import { AdministrationComponent } from './administration/administration.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    SafePipe,
    MainComponent,
    LiveComponent,
    CategoryComponent,
    AdministrationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
