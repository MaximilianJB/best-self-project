import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDLVhBDtbth7TWdVeRg5jvr62ilEK3sDSw",
  authDomain: "mjb-memory-match.firebaseapp.com",
  projectId: "mjb-memory-match",
  storageBucket: "mjb-memory-match.appspot.com",
  messagingSenderId: "324250734642",
  appId: "1:324250734642:web:5a213a9c584484581e2c2b",
  measurementId: "G-VZ5RQE8M0C"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App db={db}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
