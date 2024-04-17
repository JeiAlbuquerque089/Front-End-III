import React from 'react'
import Campanha from './components/Campanha'

const App = () => {
  return (
    <div>
      <Campanha mes="setembro" />
      <Campanha mes="outubro" />
      <Campanha mes="novembro" />
    </div>
  )
}

export default App