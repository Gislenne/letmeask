import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyCBb83T66WlRlbby3PhIWRD5__E8icykjY",
    authDomain: "letmeask-6e794.firebaseapp.com",
    databaseURL: "https://letmeask-6e794-default-rtdb.firebaseio.com",
    projectId: "letmeask-6e794",
    storageBucket: "letmeask-6e794.appspot.com",
    messagingSenderId: "237789067024",
    appId: "1:237789067024:web:30895f7d3b4d01eb4b9795"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export{firebase, auth, database}
