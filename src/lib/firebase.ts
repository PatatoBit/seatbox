// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB_RaUoXb47Qn0q-xYd5Z3dWFXlOA7BeQ8',
	authDomain: 'seatbox-131.firebaseapp.com',
	projectId: 'seatbox-131',
	storageBucket: 'seatbox-131.appspot.com',
	messagingSenderId: '732141049455',
	appId: '1:732141049455:web:362d39c6d91c218e9b5f9a',
	measurementId: 'G-HBKDJDH77S'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
