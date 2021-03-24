import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlacesListComponent } from './components/places-list/places-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlacesService } from '../app/services/places.service';

@NgModule({
  declarations: [
    AppComponent,
    PlacesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
