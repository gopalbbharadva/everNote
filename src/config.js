import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCZwcl3QrDlZIAeyJDzxEH1gKHikKIIwWE",
  authDomain: "evernote-8c2a5.firebaseapp.com",
  projectId: "evernote-8c2a5",
  storageBucket: "evernote-8c2a5.appspot.com",
  messagingSenderId: "931004243755",
  appId: "1:931004243755:web:655eeebf6677f999f56f6e",
};


firebase.initializeApp(firebaseConfig);
const firestoreRef=firebase.firestore();

export default firestoreRef;

