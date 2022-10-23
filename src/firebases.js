import {initializeApp} from 'firebase/app'
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDS1g8JWzK1L4Hyu0N449q7Vnt-rtDJyJA",
  authDomain: "linkedin-clone-2c5aa.firebaseapp.com",
  databaseURL: "https://linkedin-clone-2c5aa-default-rtdb.firebaseio.com",
  projectId: "linkedin-clone-2c5aa",
  storageBucket: "linkedin-clone-2c5aa.appspot.com",
  messagingSenderId: "126720677368",
  appId: "1:126720677368:web:b719995856255aa0e6720d",
};
let App=initializeApp(firebaseConfig);

let database=getFirestore(App);
export {database};;