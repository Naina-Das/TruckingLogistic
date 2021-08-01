// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAgnJ4-9hwlHZLnEAsQ-k09hezUfqJUgmA",
  authDomain: "assignment-3c768.firebaseapp.com",
  projectId: "assignment-3c768",
  storageBucket: "assignment-3c768.appspot.com",
  messagingSenderId: "648704833103",
  appId: "1:648704833103:web:cb30d703d6e9f9b2209c3a"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});