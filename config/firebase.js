import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
	FIREBASE_API_KEY,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET,
	FIREBASE_MESSAGING_SENDER_ID,
	FIREBASE_APP_ID,
} from "@env";

const firebaseConfig = {
	apiKey: "AIzaSyCpr0VSypN531PcM2n8OJ3x1iUh3K7Dv14",
	authDomain: "testproject-56542.firebaseapp.com",
	projectId: "testproject-56542",
	storageBucket: "testproject-56542.appspot.com",
	messagingSenderId: "593548972751",
	appId: "1:593548972751:web:fecbd867c4c6f86a3dddba"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
