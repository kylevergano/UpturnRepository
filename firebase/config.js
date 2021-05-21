import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyD-3oIaxyJz_O7OLKH6p6Uf3WLGkTfXGzA',
  authDomain: 'upturndb.firebaseapp.com',
  databaseURL:'https://upturndb.firebaseio.com',
  projectId: 'upturndb',
  storageBucket: 'upturndb.appspot.com',
  messagingSenderId:'1005747522419',
  appId: '1:1005747522419:web:867430c5f711c5e33a5306',
  measurementId:'G-9CHSCDZJNW'
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
export { firebase };
export {firebaseConfig};
const storage = firebase.storage();

export {storage, firebase as default};
