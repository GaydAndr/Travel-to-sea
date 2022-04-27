import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/models/menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  expanded: boolean = false;

  
  public over:any = 'over';

  public ifShow : boolean = true;

  public isExpanded:boolean=true;

  public hide(routerLink:string) {
    this.isExpanded = false;
    this.router.navigate([routerLink])
  }
  public expand() {
    this.isExpanded = true;
  }

  public menuItem = [
    new MenuItem('Team','team-list'),
    new MenuItem('Транспорт','car-info'),
    new MenuItem('Куди','place'),
    new MenuItem('Маршрут','rout'),
    new MenuItem('Затрати','costs'),
    new MenuItem('Списки','lists'),
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}

