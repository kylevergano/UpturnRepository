//const firebase = require("firebase");
import firebase from "firebase";
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyD-3oIaxyJz_O7OLKH6p6Uf3WLGkTfXGzA",
    authDomain: "upturndb.firebaseapp.com",
    databaseURL:"https://upturndb.firebaseio.com",
    projectId: "upturndb",
    storageBucket: "upturndb.appspot.com",
    messagingSenderId: "1005747522419",
    appId: "1:1005747522419:web:867430c5f711c5e33a5306",
    measurementId: "G-N18N5YRK5X"
};


export default function firebaseClient(){
    if(!firebase.apps.length){
        firebase.initializeApp(FIREBASE_CONFIG);
    }
}