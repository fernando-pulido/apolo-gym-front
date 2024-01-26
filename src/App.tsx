import { useGetAllProducts } from './hooks/useGetAllProducts'
import Content from './layout/Layout'

const App = () => {
  const { data, loading } = useGetAllProducts()
  console.log(data)
  console.log(loading)
  return <Content />
}

export default App
