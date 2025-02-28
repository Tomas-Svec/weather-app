import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
import { environment } from '../environments/environment';

const firebaseConfig = {
  apiKey: environment.firebase.apiKey,
  authDomain: environment.firebase.authDomain,
  projectId: environment.firebase.projectId,
  storageBucket: environment.firebase.storageBucket,
  messagingSenderId: environment.firebase.messagingSenderId,
  appId: environment.firebase.appId,
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const getDeviceToken = async (): Promise<string | null> => {
    try {
      const token = await getToken(messaging, { vapidKey: environment.firebase.vapidKey });
      console.log('Token del dispositivo:', token);
      return token; // Devuelve el token si todo va bien
    } catch (error) {
      console.error('Error al obtener el token:', error);
      return null; // Devuelve null en caso de error
    }
  };