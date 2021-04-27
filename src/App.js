import './App.css';
import firebase from 'firebase';
import { firestoreRef } from './Firebase/config';

function App() {
  return (
    <div>
      {
          firestoreRef.collection('notes').onSnapshot(snap =>{
            console.log(snap);
          })
      }
    </div>
  )
}

export default App;
