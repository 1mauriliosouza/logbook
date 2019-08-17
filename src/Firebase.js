import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCx3YjBoPWBvEHxN3CAjXdiboY65Z58Yqw",
    authDomain: "logbook-e964a.firebaseapp.com",
    databaseURL: "https://logbook-e964a.firebaseio.com",
    projectId: "logbook-e964a",
    storageBucket: "logbook-e964a.appspot.com"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;