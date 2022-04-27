import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeBtnComponent } from './components/home-btn/home-btn.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BurgerComponent } from './components/menu/burger/burger.component';
import { CarInfoComponent } from './components/car-info/car-info.component';
import { PlaceComponent } from './components/place/place.component';
import { RoutComponent } from './components/rout/rout.component';
import { CostsComponent } from './components/costs/costs.component';
import { ListsComponent } from './components/lists/lists.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { PersonInfoComponent } from './components/team-list/person-info/person-info.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    HeaderComponent,
    HomeBtnComponent,
    TeamListComponent,
    BurgerComponent,
    CarInfoComponent,
    PlaceComponent,
    RoutComponent,
    CostsComponent,
    ListsComponent,
    NotFoundComponent,
    PersonInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MatExpansionModule,
    MatSidenavModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
