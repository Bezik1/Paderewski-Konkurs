import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { RenderProvider } from './contexts/RenderContext'
import { SUBSITES } from './const/subsites'
import NextArrow from './components/NextArrow'

const App = () =>{
  const [render, setRender] = useState(0)

  return (
    <div className='app'>
      <RenderProvider render={render} setRender={setRender}>
        <Navbar />
        {SUBSITES[render].el}
        {render != 0 && <NextArrow arrow="up"/>}
        <NextArrow arrow="down"/>
      </RenderProvider>
    </div>
  )
}

export default App
