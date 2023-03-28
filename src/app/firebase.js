import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCMKdg-KtyG8JgUWoHQ01STgqqPBwhIMQE',
  authDomain: 'social-network-work.firebaseapp.com',
  projectId: 'social-network-work',
  storageBucket: 'social-network-work.appspot.com',
  messagingSenderId: '96646576824',
  appId: '1:96646576824:web:79181247892f9bbddc124d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
