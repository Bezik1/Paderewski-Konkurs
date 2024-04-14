import { useState } from 'react'
import { RenderProvider } from './contexts/RenderContext'
import { SUBSITES } from './const/subsites'
import Navbar from './components/Navbar'
import NextArrow from './components/NextArrow'
import Title from './components/Title'
import Music from './components/Music'
import './App.css'

const App = () =>{
  const [render, setRender] = useState(0)

  return (
    <div className='app'>
      <Music path="background_music.mp3" />
      <Title>Ignacy Jan Paderewski</Title>
      <RenderProvider render={render} setRender={setRender}>
        <Navbar />
        {SUBSITES[render].el}
        {render != 0 && <NextArrow arrow="up"/>}
        {render != SUBSITES.length-1 && <NextArrow arrow="down"/>}
      </RenderProvider>
    </div>
  )
}

export default App
