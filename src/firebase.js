import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyC0fZaEpvpuqAiYHOHYQUZouXuoIijpnhs",
  authDomain: "clone-9fd28.firebaseapp.com",
  projectId: "clone-9fd28",
  storageBucket: "clone-9fd28.appspot.com",
  messagingSenderId: "9442838316",
  appId: "1:9442838316:web:c1c30f75941aba59fa8e89",
  measurementId: "G-7F6JJRFKD6"
});

const auth = firebase.auth();

export { auth };