import { Hero } from './../app/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Heroes',
  templateUrl: './Heroes.component.html',
  styleUrls: ['./Heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
