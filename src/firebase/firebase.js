import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDC3nll9H4lv7HUoEfxhGywkigkQd8fRpU",
    authDomain: "expensify-30ca0.firebaseapp.com",
    databaseURL: "https://expensify-30ca0.firebaseio.com",
    projectId: "expensify-30ca0",
    storageBucket: "expensify-30ca0.appspot.com",
    messagingSenderId: "1016709037708"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Bergy'
});