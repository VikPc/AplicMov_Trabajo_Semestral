import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
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
export class PrincipalPage implements OnInit {

  showImage = false;

  userName: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Mostrar la imagen al cargar la página
    this.showImage = true;

    // Después de 7 segundos, ocultar la imagen automáticamente
    setTimeout(() => {
      this.showImage = false;
    }, 7000); // 7000 milisegundos = 7 segundos
    // Obtener el nombre del usuario de la navegación
    this.route.paramMap.subscribe(params => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras.state) {
        this.userName = navigation.extras.state['user'];
      }
    });
  }

  // Función para redirigir a diferentes deportes
  navigateTo(sport: string) {
    this.router.navigate([`/sport/${sport}`]); // Reemplaza con la ruta adecuada
  }
}

//animacio 

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

