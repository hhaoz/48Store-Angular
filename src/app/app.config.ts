import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'fir-web24a-dd777',
        appId: '1:1080636081103:web:0d049c625a848ab91dc8ba',
        storageBucket: 'fir-web24a-dd777.appspot.com',
        apiKey: 'AIzaSyDQqm58ICqjystH-mpHnIuUIRwjAlvOuDY',
        authDomain: 'fir-web24a-dd777.firebaseapp.com',
        messagingSenderId: '1080636081103',
      }),
    ),
    provideAuth(() => getAuth()),
  ],
};
