import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { HeaderComponent } from './header/header.component';
import { HotelComponent } from './hotel/hotel.component';
import { ResaComponent } from './resa/resa.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HeaderComponent,
    HotelComponent,
    ResaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
