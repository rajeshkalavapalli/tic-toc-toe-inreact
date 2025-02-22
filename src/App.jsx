import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './components/Player'
import Gameboard from './components/Gameboard'
function App( ) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ol>
        <Player Name="player1" symbol= "X"/>
        <Player Name="player2" symbol= "O"/>
      </ol>
      <Gameboard/>
    </div>
    
  )
}

export default App
