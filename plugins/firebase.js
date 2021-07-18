import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyCtA6LeklI5cPn2ShjJV49O6_VjF5NekJU",
    authDomain: "zameria-9260b.firebaseapp.com",
    projectId: "zameria-9260b",
    storageBucket: "zameria-9260b.appspot.com",
    messagingSenderId: "542238092713",
    appId: "1:542238092713:web:24d66232919ba8d0b2e8b8",
    measurementId: "G-ZVRDCXKPJK"
}

let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}

export const db = app.database()