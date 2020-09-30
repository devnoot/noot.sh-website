import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBzKiqaZEY160Q1TRct8-kKvmrhBbyetqk',
  authDomain: 'noot-1f502.firebaseapp.com',
  databaseURL: 'https://noot-1f502.firebaseio.com',
  projectId: 'noot-1f502',
  storageBucket: 'noot-1f502.appspot.com',
  messagingSenderId: '230642593360',
  appId: '1:230642593360:web:a161521443c3818415eb55',
  measurementId: 'G-B04BGHPB9C',
}

firebase.initializeApp(config)

export { firebase }
