import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { RenderProvider } from './contexts/RenderContext'
import MusicCareer from './components/MusicCareer'
import { SUBSITES } from './const/subsites'

const App = () =>{
  const [render, setRender] = useState(SUBSITES[0])

  return (
    <div className='app'>
      <RenderProvider render={render} setRender={setRender}>
        <Navbar />
        {render.el}
      </RenderProvider>
    </div>
  )
}

export default App
