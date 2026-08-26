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

// ── [追加 2026-08-26] Chromeの「ホーム画面に追加」インストール条件を満たすため、
// fetchイベントを実装。ただし、キャッシュ・オフライン動作は一切追加せず、
// 常にネットワークへそのまま通すだけ(Simple is the best、常に最新データを取得する
// という既存方針を守る)。 ──
self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
