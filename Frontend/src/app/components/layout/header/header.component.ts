import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  opc: MenuItem[] = [];
  estilosMenu: {}= {
    'background-color': '#8DC3D8',
    'border': '0',


  }
  constructor() { }

  ngOnInit(): void {

    this.opc = [
      {
        label: 'Cliente',
        icon: 'pi pi-fw pi-users',
        routerLink: '/Cliente'
      },
      {
        label: 'Coche',
        icon: 'pi pi-fw pi-cars',
        routerLink: '/Coche'
      },
    ];
  }

}
