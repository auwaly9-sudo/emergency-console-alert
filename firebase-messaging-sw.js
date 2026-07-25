importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAgwfXdWSH1l84jcUfuc7Y2Fuq5G8a9ncQ",
  authDomain: "protein-822b1.firebaseapp.com",
  projectId: "protein-822b1",
  storageBucket: "protein-822b1.appspot.com",
  messagingSenderId: "931746373636",
  appId: "1:931746373636:web:2bc44ee7041a6a22d31551"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/icon.png' // optional — add an icon file or remove this line
  });
});
