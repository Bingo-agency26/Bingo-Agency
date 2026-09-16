import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCEuNMmbAAjbNk93P2CBINjbUqeayRxvag",
  authDomain: "bingo-agency.firebaseapp.com",
  projectId: "bingo-agency",
  storageBucket: "bingo-agency.firebasestorage.app",
  messagingSenderId: "123693704250",
  appId: "1:123693704250:web:65394e2b584cb4b8090103"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

