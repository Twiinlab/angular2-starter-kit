import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() {   }

  ngOnInit() {
    console.log('hello `Home` component');
   }
}