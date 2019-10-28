import firebase from 'firebase/app';
import 'firebase/firestore';

// FIXME This tokens need to be provided by an env configuration
const app = firebase.initializeApp({
  apiKey: 'AIzaSyDzfZ7Y4SE_uBJVeNz9w_b6xD_ixR-5JmI',
  authDomain: 'sef-monitor.firebaseapp.com',
  databaseURL: 'https://sef-monitor.firebaseio.com',
  projectId: 'sef-monitor',
  storageBucket: 'sef-monitor.appspot.com',
  messagingSenderId: '369950764192',
  appId: '1:369950764192:web:0ecfecf55bc532fd69edc5',
  measurementId: 'G-J98LYJ2H6N',
});

export async function addSnapshotListeners(callback) {
  const db = app.firestore();
  const agendamentosRef = db.collection('agendamentos');
  const agendamentosCollection = await agendamentosRef.get();
  agendamentosCollection.forEach(async agendamento => {
    const locaisRef = agendamentosRef.doc(agendamento.id).collection('locais');
    const locais = await locaisRef.get();
    locais.forEach(local => {
      agendamentosRef
        .doc(agendamento.id)
        .collection('locais')
        .doc(local.id)
        .onSnapshot(snapshot => {
          callback(agendamento.id, local.id, snapshot.data());
        });
    });
  });
}

export default app;
