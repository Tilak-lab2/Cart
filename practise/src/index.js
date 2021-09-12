import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app'
import 'firebase/firestore';


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI-QYLCdktUK-lToUEUnkDhs88lWQqDI8",
  authDomain: "practuse.firebaseapp.com",
  projectId: "practuse",
  storageBucket: "practuse.appspot.com",
  messagingSenderId: "588469965984",
  appId: "1:588469965984:web:57ac315257983d8ec2e5c5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

