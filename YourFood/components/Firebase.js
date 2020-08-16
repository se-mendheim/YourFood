import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB2milh9HNDVGNUUFKXcR-Ohq3JvtXLJdo",
      authDomain: "yourfood-715cb.firebaseapp.com",
      databaseURL: "https://yourfood-715cb.firebaseio.com",
      projectId: "yourfood-715cb",
      storageBucket: "yourfood-715cb.appspot.com",
      messagingSenderId: "745093679172",
      appId: "1:745093679172:web:d306e40432aa0ca0685411",
      measurementId: "G-CHQW9DQMST",
  };
  export const firebaseApp = firebase.initializeApp(firebaseConfig);
  