import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBEcubH1CJP7P-4UCoH70FjeTR-Otrsuho",
  authDomain: "angela-d454b.firebaseapp.com",
  databaseURL: "https://angela-d454b.firebaseio.com",
  projectId: "angela-d454b",
  storageBucket: "",
  messagingSenderId: "220041321306"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export const database = firebase.database();
