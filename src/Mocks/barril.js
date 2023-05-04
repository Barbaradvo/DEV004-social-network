// import firebase from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
// import { FirebaseError } from '@firebase/util';

/** const App = {
    signup: async (email, password) => {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await userCredential.user.sendEmailVerification();
      return 'Check your email for verification mail before logging in';
    },
  };

  */

export default {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  FirebaseError,

};
