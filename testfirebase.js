import * as firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyA7Ew5NXuICYv5O9s7PYSSwfLcsan7DO9E",
    authDomain: "quilltest-server.firebaseapp.com",
    databaseURL: "https://quilltest-server.firebaseio.com",
    projectId: "quilltest-server",
    storageBucket: "",
    messagingSenderId: "242314773630",
    appId: "1:242314773630:web:37d418ed31c5b017"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const database = firebase.database().ref('/posts');
