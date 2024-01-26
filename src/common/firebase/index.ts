import { getFirestore } from 'firebase/firestore'
import { initializeApp, FirebaseOptions } from 'firebase/app'

import { FirebaseConfig } from '../constants/firebase.constant'

const config: FirebaseOptions = FirebaseConfig

const firebase = initializeApp(config)

export const DB = getFirestore(firebase)
