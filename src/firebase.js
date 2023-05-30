// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_TOKEN_FIREBASE,
  authDomain: "meteo-mds.firebaseapp.com",
  projectId: "meteo-mds",
  storageBucket: "meteo-mds.appspot.com",
  messagingSenderId: "728077218554",
  appId: "1:728077218554:web:87211a0483b373fbe74f43",
  measurementId: "G-GT2Z7LNMHP"
};

const vapidKey = import.meta.env.VITE_TOKEN_MESSAGERIE



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const myGetToken = () => {
    return new Promise((resolve, reject) => {
      getToken(messaging, {vapidKey: vapidKey})
        .then((currentToken) => {
          if (currentToken) {
            console.log('current token for client: ', currentToken);
            resolve(true);
            // Track the token -> client mapping, by sending to backend server
            // show on the UI that permission is secured
          } else {
            console.log('No registration token available. Request permission to generate one.');
            resolve(false);
            // shows on the UI that permission is required 
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
          // catch error while creating client token
          reject(err)
        });
    })
  }