  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDfKVeDOUtI0SmeuePv4fzA9W77EDXSlEM",
    authDomain: "fir-a3b1b.firebaseapp.com",
    projectId: "fir-a3b1b",
    storageBucket: "fir-a3b1b.appspot.com",
    messagingSenderId: "246505735236",
    appId: "1:246505735236:web:4561cda74a41d0ee4d2811",
    measurementId: "G-2CPJ739KTV"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);