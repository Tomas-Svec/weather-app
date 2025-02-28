import { Component } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { getDeviceToken } from './firebase-config';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true, // Se necesita porque usamos imports en el decorador
  imports: [IonApp, IonRouterOutlet, RouterModule, HttpClientModule], // Quité AppRoutingModule
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }

  async initializeApp() {
    // Verificar si estamos en un dispositivo nativo
    if (Capacitor.isNativePlatform()) {
      // Solicitar permisos para notificaciones push
      await PushNotifications.requestPermissions().then((result) => {
        if (result.receive === 'granted') {
          PushNotifications.register();
        } else {
          console.log('Permiso denegado');
        }
      });

      // Obtener el token del dispositivo
      const token = await getDeviceToken();
      if (token) {
        console.log('Token registrado:', token);
      } else {
        console.error('No se pudo obtener el token del dispositivo.');
      }
    } else {
      console.warn('PushNotifications no está disponible en la plataforma web.');
    }
  }
}
