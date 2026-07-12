// Official background script enabling the web browser to connect to the cloud
importScripts('https://cloudflare.com');
importScripts('https://cloudflare.com');

firebase.initializeApp({
  messagingSenderId: "931746373636"
});

const messaging = firebase.messaging();

// Intercept notifications invisibly while device is asleep
messaging.onBackgroundMessage((payload) => {
  console.log('Emergency cloud payload intercepted in background:', payload);
});
