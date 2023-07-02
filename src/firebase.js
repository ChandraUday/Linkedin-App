import firebase from "firebase" 

const firebaseConfig = {
    apiKey: "AIzaSyBwe0Zb0R7XDVoU80QPPi50JgvrJyG4P4Q",
    authDomain: "netflix-clone1-dfbe2.firebaseapp.com",
    projectId: "netflix-clone1-dfbe2",
    storageBucket: "netflix-clone1-dfbe2.appspot.com",
    messagingSenderId: "1095157322586",
    appId: "1:1095157322586:web:78606dc777d5d42d9c9963"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth();

 export { auth }