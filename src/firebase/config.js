import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCRXjDMkoD4EJIeIOz-wUKfVfKwIgQ4ZMg",
    authDomain: "hitmovies-c1219.firebaseapp.com",
    projectId: "hitmovies-c1219",
    storageBucket: "hitmovies-c1219.appspot.com",
    messagingSenderId: "784378998252",
    appId: "1:784378998252:web:83fb89157fe62db075a4c9"
  };

// init firebase
initializeApp(firebaseConfig)

//init firestore
const database = getFirestore()

export { database }