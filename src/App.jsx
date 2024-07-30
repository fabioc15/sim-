import { useState } from 'react'
import Mensagem from './components/Mensagem'
import './App.css'
import Frase from './components/Frase'
import Calculadora from './components/Calculadora'

function HelloWorld() {
  return <p>Hello World</p>
}

function App() {
  return (
    <>
      <HelloWorld></HelloWorld>
      <Mensagem texto="HelloWorld2"></Mensagem>
      <div className='das'>
      <Frase></Frase>
      <Calculadora/>
      </div>
    </>
  )
}

export default App
