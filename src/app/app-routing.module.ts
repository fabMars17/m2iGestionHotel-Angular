import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationGuard } from './authentification.guard';
import { ClientComponent } from './client/client.component';
import { HotelComponent } from './hotel/hotel.component';
import { LoginComponent } from './login/login.component';
import { ResaComponent } from './resa/resa.component';

const routes: Routes = [
  {path : 'client' , component : ClientComponent, canActivate : [AuthentificationGuard]},
  {path : 'hotel' , component : HotelComponent, canActivate : [AuthentificationGuard]},
  {path : 'resa' , component : ResaComponent, canActivate : [AuthentificationGuard]},
  { path : 'login' , component : LoginComponent },
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
