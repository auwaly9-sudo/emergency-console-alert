// Official Background Engine Link enabling browser-to-browser network handshakes
importScripts('https://cloudflare.com');
importScripts('https://cloudflare.com');

// Configures background listeners natively to match your active cloud project ID
const firebaseConfig = {
  messagingSenderId: "931746373636",
  projectId: "protein-822b1"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Listens for alerts and forces a high-priority system notification while the browser tab is hidden
messaging.onBackgroundMessage((payload) => {
  console.log('Emergency data payload received in background:', payload);
  
  const notificationTitle = payload.notification ? payload.notification.title : 'EMERGENCY BROADCAST';
  const notificationOptions = {
    body: payload.notification ? payload.notification.body : 'Critical incident reported.',
    icon: '/favicon.png',
    badge: '/favicon.png',
    tag: 'emergency-alert',
    requireInteraction: true // Keeps the alert locked on screen until the user dismisses it
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
