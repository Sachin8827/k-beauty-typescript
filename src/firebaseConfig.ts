  import {initializeApp} from 'firebase/app'
  import {getAnalytics} from 'firebase/analytics'

  const firebaseConfig = {
      apiKey: "AIzaSyDkyolYweGZpEYyszoO_mHUd2vjjdsbxIU",
      authDomain: "k-beauty-4e225.firebaseapp.com",
      projectId: "k-beauty-4e225",
      storageBucket: "k-beauty-4e225.appspot.com",
      messagingSenderId: "697075565699",
      appId: "1:697075565699:web:ad1e3e6440580f379447b6",
      measurementId: "G-B9PBKR8DQK"
  };

  export const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);