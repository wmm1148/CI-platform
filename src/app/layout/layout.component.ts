import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  host: {
    '[class.lay-fixed]': 'true'
  }
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
