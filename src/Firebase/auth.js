import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { app } from './config.js';

export const auth = getAuth(app);

// eslint-disable-next-line max-len
export const addUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const logOut = () => signOut(auth);
export const currentUser = () => auth.currentUser;
