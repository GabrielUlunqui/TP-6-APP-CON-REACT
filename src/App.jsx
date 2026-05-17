import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CardList from './components/listacartas'
import Contador from './components/Contador'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <CardList/>
      <Contador/>
      <Footer/>
    </>
    
  )
}

export default App
