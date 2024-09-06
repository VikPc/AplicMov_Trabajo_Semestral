import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  userEmail: string = ''; // dejar predefinido usuario

  // Usuario registrado en duro
  registeredUser: string = 'víctor'; // restricicon para conformacion de usuario

  constructor(private router: Router, private alertController: AlertController) {}

  //  Mensaje personalizado en caso de estar bien o mal
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }


  resetPassword() {
    if (this.userEmail) {
      
      if (this.userEmail === this.registeredUser) {
        console.log('Usuario:', this.userEmail);

        // Si esta bien arroja este mendaje
        this.showAlert('¡Éxito!', 'Usuario válido. Redirigiendo...');

        // Redirige a la página que deseemos
        this.router.navigate(['/login']);
      } else {
        // Si esta mal arroja este mendaje
        this.showAlert('Error', 'Usuario no registrado. Por favor, introduce un Usuario válido.');
      }
    } else {
      // Si esta vacio arroja este mendaje
      this.showAlert('Error', 'Por favor, introduce un Usuario válido.');
    }
  }
}
