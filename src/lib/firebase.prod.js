// v9 compat packages are API
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmqNajZYM1EMzmtS2HdRqQ210CrLq3OI4",
  authDomain: "netflix-login-d4216.firebaseapp.com",
  projectId: "netflix-login-d4216",
  storageBucket: "netflix-login-d4216.appspot.com",
  messagingSenderId: "357382737200",
  appId: "1:357382737200:web:f546430abfa020185c4cf5",
  measurementId: "G-19KS57RLZD",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// seedDatabase(firebase);

// apiKey: "AIzaSyCmqNajZYM1EMzmtS2HdRqQ210CrLq3OI4",
// authDomain: "netflix-login-d4216.firebaseapp.com",
// projectId: "netflix-login-d4216",
// storageBucket: "netflix-login-d4216.appspot.com",
// messagingSenderId: "357382737200",
// appId: "1:357382737200:web:f546430abfa020185c4cf5",
// measurementId: "G-19KS57RLZD",
