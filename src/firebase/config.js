import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnCBU4cqdQP-Jdsk1Mc59sAigh6SRehZk",
authDomain: "genevive-s-chatter.firebaseapp.com",
projectId: "genevive-s-chatter",
storageBucket: "genevive-s-chatter.appspot.com",
messagingSenderId: "134432494416",
appId: "1:134432494416:web:40fc816cc3ada64b1d9255",
measurementId: "G-TZ4M6C45E6"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// timestamp
export const timestamp = firebase.firestore.Timestamp;

// init services
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
