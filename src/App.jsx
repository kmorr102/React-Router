import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Link } from "react-router-dom"
import Blue from './components/blue'
import Red from './components/red'
import Home from './components/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div id="container">
        <h1>Hello React Router!</h1>
          <div id="navbar">
            <Link to= '/'>Home</Link>
            <Link to= '/blue'>Blue</Link>
            <Link to= '/red'>Red</Link>

          </div>

          <div id="main-section">
            <Routes>
                <Route path='/'element={<Home />}/>
                <Route path='/blue'element={<Blue />}/>
                <Route path='/red'element={<Red />}/>
            </Routes>
          </div>
    </div>
    
    </>
  )
}

export default App
