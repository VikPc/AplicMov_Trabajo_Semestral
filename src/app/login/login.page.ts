import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = 'víctor';
  password: string = '1234';

  constructor(private alertController: AlertController, private router: Router) {}

  login() {
    const validUser = 'víctor';
    const validPassword = '1234';

    if (this.username === validUser && this.password === validPassword) {
      this.showAlert('Bienvenido, ' + this.username + '!', 'Has ingresado correctamente.');
      
      // Redirige a la vista principal y pasa el nombre de usuario a través del estado
      this.router.navigate(['/principal'], {
        state: { user: this.username }
      });
    } else {
      this.showAlert('Error de Inicio de Sesión', 'Credenciales incorrectas. Inténtalo de nuevo.');
    }
  }

  goToRegistro() {
    this.router.navigate(['/registro']); // Redirige a la vista 'registro'
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
