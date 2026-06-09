import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxPL24t32-6R2MxZNYq4OtmDsRw9gXoQw",
  authDomain: "sentinel-api-8b7da.firebaseapp.com",
  projectId: "sentinel-api-8b7da",
  storageBucket: "sentinel-api-8b7da.firebasestorage.app",
  messagingSenderId: "295736310338",
  appId: "1:295736310338:web:917f0e4669066ddc91cbdb",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);