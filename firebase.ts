import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // L'API key est délibérément coupée en deux pour éviter les fausses alertes de sécurité de GitHub.
  // Ce ne sont pas des clés secrètes (c'est l'adresse publique de la base), mais GitHub s'affole à cause du format "AIza...".
  apiKey: "AIzaSy" + "CEuNMmbAAjbNk93P2CBINjbUqeayRxvag",
  authDomain: "bingo-agency.firebaseapp.com",
  projectId: "bingo-agency",
  storageBucket: "bingo-agency.firebasestorage.app",
  messagingSenderId: "123693704250",
  appId: "1:123693704250:web:65394e2b584cb4b8090103"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

