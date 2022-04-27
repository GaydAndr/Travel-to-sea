import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  public menuItem = [
    // new MenuItem('Team','team-list'),
    new MenuItem('Транспорт','../car-info'),
    new MenuItem('Куди','place'),
    new MenuItem('Маршрут','rout'),
    new MenuItem('Затрати','costs'),
    new MenuItem('Списки','lists'),
  ]


  constructor() { }

  ngOnInit(): void {
  }

}


