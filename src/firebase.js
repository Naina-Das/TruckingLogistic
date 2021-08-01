import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/messaging';
import { functions } from "firebase";
// const messaging = firebase.messaging();


const firebaseConfig = {
    apiKey: "AIzaSyAgnJ4-9hwlHZLnEAsQ-k09hezUfqJUgmA",
    authDomain: "assignment-3c768.firebaseapp.com",
    projectId: "assignment-3c768",
    storageBucket: "assignment-3c768.appspot.com",
    messagingSenderId: "648704833103",
    appId: "1:648704833103:web:cb30d703d6e9f9b2209c3a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`user/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { fullName } = user;
    try {
      await userRef.set({
        fullName,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`user/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export const generateTruckDocument = async (data) => {
  if (!data) return;

  const truckRef = firestore.doc(`trucks/${Math.random()}`);
    try {
      console.log('ddddddd', data);
      await truckRef.set({...data});
    } catch (error) {
      console.error("Error creating user document", error);
    }
  return 
};

export const getTruckDocuments = async () => {

  const truckRef = await firestore.collection("trucks").get();
    try {
      const result = [];
      truckRef.forEach((doc) => {
        result.push(doc.data());
    });
    return result;
    } catch (error) {
      console.error("Error creating user document", error);
    }
  return 
};
export const getToken = (setTokenFound) => {
  return messaging.getToken({vapidKey: 'BOWWwDr7FEIHgXLuoXHIjaR3xH0g-_gQWNTcD74vhrr29CM9yfjJEw0Aaa8xHYbFQ7M_tgXVJahZ5GTQhGyHAb0'}).then((currentToken) => {
    console.log('current Token, ', currentToken);
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(currentToken);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound('');
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});