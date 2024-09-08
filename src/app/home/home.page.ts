import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('1s ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1s ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class HomePage {
  showElement = true;
  showImage = true;

  toggleImage() {
    this.showImage = !this.showImage;
  }

  toggleElement() {
    this.showElement = !this.showElement;
  }

  constructor() {}

}

//animacion

//-----------Animacion----------------------

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';





