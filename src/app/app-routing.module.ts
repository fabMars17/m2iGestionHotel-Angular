import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { HotelComponent } from './hotel/hotel.component';
import { ResaComponent } from './resa/resa.component';

const routes: Routes = [
  {path : 'client' , component : ClientComponent},
  {path : 'hotel' , component : HotelComponent},
  {path : 'resa' , component : ResaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
