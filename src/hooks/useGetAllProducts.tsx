import { useEffect, useState } from 'react'

import { getAll, Product } from '../services/get-all-products'

type Data = {
  data: Product[]
  loading: boolean
  error: boolean
}

export const useGetAllProducts = () => {
  const [data, setData] = useState<Data>({
    data: [],
    loading: false,
    error: false,
  })

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      setData({ ...data, loading: true })
      try {
        const res = await getAll()
        setData({ data: res as Product[], loading: false, error: false })
      } catch (err) {
        setData({ data: [], loading: false, error: true })
      }
    })()
  }, [])
  return { ...data }
}
