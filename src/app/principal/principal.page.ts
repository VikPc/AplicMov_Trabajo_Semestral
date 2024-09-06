import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage {
  userName: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
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
