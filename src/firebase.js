
import { initializeApp } from "firebase/app";

console.log(process.env)
const firebaseConfig = {
  apiKey: 'AIzaSyDDo-h9xO7rqgZoB8uGk0FCK6DYnQLlgxs' ,
  authDomain: 'test-4f213.firebaseapp.com',
  projectId: 'test-4f213',
  storageBucket: 'test-4f213.appspot.com',
  messagingSenderId: '933120148100',
  appId: '1:933120148100:web:21f912b40c22a1632e38d1'
};


const app = initializeApp(firebaseConfig);