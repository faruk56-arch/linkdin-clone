import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyA4H3Oh0O8RfSH6etDQp4FC-yfaz0NuBNU",
    authDomain: "linkdin-clone-b3396.firebaseapp.com",
    projectId: "linkdin-clone-b3396",
    storageBucket: "linkdin-clone-b3396.appspot.com",
    messagingSenderId: "16933903031",
    appId: "1:16933903031:web:92a98c8bf56eac393dcb32",
    measurementId: "G-XV1Z2ET4W5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
