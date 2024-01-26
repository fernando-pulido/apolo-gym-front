import { FirebaseOptions } from 'firebase/app'

const API_KEY: string = import.meta.env.VITE_APP_API_KEY
const AUTH_DOMAIN: string = import.meta.env.VITE_APP_AUTH_DOMAIN
const DATA_BASE_URL: string = import.meta.env.VITE_APP_DATA_BASE_URL
const PROJECT_ID: string = import.meta.env.VITE_APP_PROJECT_ID
const STORAGE_BUCKET: string = import.meta.env.VITE_APP_STORAGE_BUCKET
const MESSAGING_SENDER_ID: string = import.meta.env.VITE_APP_MESSAGING_SENDER_ID
const APP_ID: string = import.meta.env.VITE_APP_APP_ID

export const FirebaseConfig: FirebaseOptions = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATA_BASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
}
