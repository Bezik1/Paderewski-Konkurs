import { useState } from 'react'
import { RenderProvider } from './contexts/RenderContext'
import { SUBSITES } from './const/subsites'
import Navbar from './components/Navbar'
import NextArrow from './components/NextArrow'
import Title from './components/Title'
import './App.css'
import Musicbar from './components/Musicbar'
import { MusicProvider } from './contexts/MusicContext'
import MUSIC_PATH from "./assets/background_music.mp3"

const App = () =>{
  const [render, setRender] = useState(0)
  const [music, setMusic] = useState<[string, boolean]>([MUSIC_PATH, false])

  return (
    <div className='app'>
      <MusicProvider music={music} setMusic={setMusic}>
        <Musicbar />
      </MusicProvider>
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
