

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBMRQpoQP4v2hgFYRgHdOd_dnmF8JCNr9E",
    authDomain: "react-js-ab4d8.firebaseapp.com",
    databaseURL: "https://react-js-ab4d8-default-rtdb.firebaseio.com",
    projectId: "react-js-ab4d8",
    storageBucket: "react-js-ab4d8.firebasestorage.app",
    messagingSenderId: "473228790634",
    appId: "1:473228790634:web:b379ff388da53f728b7313",
    measurementId: "G-HVFP6YPYX0"
};

export const app = initializeApp(firebaseConfig);