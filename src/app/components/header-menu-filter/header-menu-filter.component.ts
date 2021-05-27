import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu-filter',
  templateUrl: './header-menu-filter.component.html',
  styleUrls: ['./header-menu-filter.component.scss'],
})
export class HeaderMenuFilterComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit() { }

  projectFilter() {
    console.log('Filtrandoooo!!')
  }

}
