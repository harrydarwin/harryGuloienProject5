import firebase from 'firebase/app';
import 'firebase/database'


    // Your web app's Firebase configuration
  const firebaseConfig = {
        apiKey: "AIzaSyAp9MIJdQ3_D0v3obmdu0Pca8xR9hGzesM",
    authDomain: "letsargue-5dd95.firebaseapp.com",
    databaseURL: "https://letsargue-5dd95.firebaseio.com",
    projectId: "letsargue-5dd95",
    storageBucket: "letsargue-5dd95.appspot.com",
    messagingSenderId: "1046060093328",
    appId: "1:1046060093328:web:6ff4d061c148957d60ad15"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase; 