import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsH8xaSUtGTVkJP9JWUwP53lJLHmV_se4",
  authDomain: "le-dev-matheux.firebaseapp.com",
  projectId: "le-dev-matheux",
  storageBucket: "le-dev-matheux.appspot.com",
  messagingSenderId: "252490653598",
  appId: "1:252490653598:web:5f8aef85935d13d1ab408f",
  measurementId: "G-M82JTNFEWW",
};

// Initialize Firebase
export const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Google analytics
const analytics = getAnalytics(app);

// Create a provider instance
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
