import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarInfoComponent } from './components/car-info/car-info.component';
import { CostsComponent } from './components/costs/costs.component';
import { HomeComponent } from './components/home/home.component';
import { ListsComponent } from './components/lists/lists.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlaceComponent } from './components/place/place.component';
import { RoutComponent } from './components/rout/rout.component';
import { TeamListComponent } from './components/team-list/team-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}, 
  {path: 'home', component: HomeComponent}, 
  {path: 'team-list', component: TeamListComponent}, 
  {path: 'car-info', component: CarInfoComponent}, 
  {path: 'place', component: PlaceComponent}, 
   {path: 'rout', component: RoutComponent}, 
  {path: 'costs', component: CostsComponent}, 
  {path: 'lists', component: ListsComponent}, 
  {path: '**', component: NotFoundComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
