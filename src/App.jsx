import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CardList from './components/listacartas'
import Contador from './components/Contador'
import Formulario from './components/ContacForm'
import ProductoList from './components/ProductList'
import TodoApp from './components/TodoApp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <CardList/>
      <Contador/>
      <Formulario/>
      <ProductoList/>
      <TodoApp/>
      <Footer/>
    </>
    
  )
}

export default App
