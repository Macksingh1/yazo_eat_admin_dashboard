// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app'
import { getMessaging, isSupported } from 'firebase/messaging'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const initialize = (
  FIREBASE_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MSG_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID
) => {
  const firebaseConfig = {
    apiKey: "AIzaSyBTTBxN95PF8ssMRv5DxDoeJXVWiN2N_vo",
    authDomain: "yazotestfirebase.firebaseapp.com",
    projectId: "yazotestfirebase",
    storageBucket: "yazotestfirebase.firebasestorage.app",
    messagingSenderId: "316869638687",
    appId: "1:316869638687:web:3a4cb6f50b084166cdf32a",
    measurementId: "G-6HZ884JQNT"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig)
  const messaging = getMessaging(app)
  return messaging
}
export const isFirebaseSupported = async() => {
  return await isSupported()
}
