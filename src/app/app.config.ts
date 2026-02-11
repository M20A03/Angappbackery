import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';

// Your existing config from app.config.ts
const firebaseConfig = {
  apiKey: "AIzaSyBysvq_56k58-RzPjPfm3pqvzi2sRckyvk",
  authDomain: "angappbackery-216fe.firebaseapp.com",
  projectId: "angappbackery-216fe",
  storageBucket: "angappbackery-216fe.firebasestorage.app",
  messagingSenderId: "434250655992",
  appId: "1:434250655992:web:0e4458efc44602671a730d",
  measurementId: "G-GBY79TFGQP"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Add these providers to link Firestore to your app
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};