// Importa as funções necessárias do Firebase para autenticação e banco de dados.
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants"; // Importa a biblioteca Constants do Expo.

// Configuração do Firebase para autenticação e banco de dados.
const firebaseConfig = {
  apiKey: "AIzaSyBz1yzx5A1Ag3QDg6g7A0IAIacBUvKd3Sc",
  authDomain: "whats-a7a05.firebaseapp.com",
  projectId: "whats-a7a05",
  storageBucket: "whats-a7a05.appspot.com",
  messagingSenderId: "430746364685",
  appId: "1:430746364685:web:447405b56766a80ab69e44"
};

// Inicializa o Firebase com a configuração fornecida.
initializeApp(firebaseConfig);

// Obtém a instância de autenticação do Firebase.
export const auth = getAuth();

// Obtém a instância do banco de dados Firestore do Firebase.
export const database = getFirestore();
