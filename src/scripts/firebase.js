import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBESxYT0Z2zvriNUnUvinLuW0yUTMoY5uY",
    authDomain: "chat-test-d0494.firebaseapp.com",
    projectId: "chat-test-d0494",
    storageBucket: "chat-test-d0494.appspot.com",
    messagingSenderId: "982047982210",
    appId: "1:982047982210:web:7c10278fdd560df7436a9b",
    measurementId: "G-E269MFQXL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default {
    app,
};