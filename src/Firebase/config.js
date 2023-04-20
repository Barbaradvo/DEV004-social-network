import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import {
  getFirestore, addDoc, collection, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc,
} from 'firebase/firestore';

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
export const auth = getAuth(app);
export const database = getDatabase(app);
export const db = getFirestore(app);

// guardar dato
export const saveTask = (title, description) => {
  console.log('aqui');
  addDoc(collection(db, 'tasks'), { title, description });
};

// listar datos
export const getTasks = () => getDocs(collection(db, 'tasks'));

// cuando los datos cambien tiempo real

export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback);

/// eliminar
export const deleteTask = (id) => deleteDoc(doc(db, 'tasks', id));

// editar
export const getTask = (id) => getDoc(doc(db, 'tasks', id));

// actualizar
export const updateTask = (id, newFile) => updateDoc(doc(db, 'tasks', id), newFile);
