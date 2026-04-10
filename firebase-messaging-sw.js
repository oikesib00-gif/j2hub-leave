importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCkVjOvNofSJv7KzThDBlwfBZ9uErOx21o",
  authDomain: "j2hub-leave.firebaseapp.com",
  projectId: "j2hub-leave",
  storageBucket: "j2hub-leave.firebasestorage.app",
  messagingSenderId: "587983949026",
  appId: "1:587983949026:web:46ecb271705e33fd4522bb"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://oikesib00-gif.github.io/j2hub-leave/j2hubicon.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
