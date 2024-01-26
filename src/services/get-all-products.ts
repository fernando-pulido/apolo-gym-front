import { collection, getDocs } from 'firebase/firestore'

import { DB } from '../common/firebase'

export type Product = {
  name: string
  price: number
  trademark: string
}

export const getAll = async (): Promise<Product[]> => {
  try {
    const products = collection(DB, 'products')

    const snapshot = await getDocs(products)

    const res = snapshot.docs.map(doc => doc.data())

    return res as Product[]
  } catch (error) {
    console.log(error)
    return []
  }
}
