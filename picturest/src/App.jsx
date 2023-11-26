import { Fragment, useState } from 'react'

import {Routes, Route, BrowserRouter} from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Toaster} from 'react-hot-toast'


import Navigation from './components/general/Navigation'
import Index from './pages/Index'
import Retratos from './pages/Retratos'

const indexPage = (
  <Index/>
)

const retratosPage = (
  <Retratos />  
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <header className="header">
          <Navigation />
        </header>
        <Routes>
          <Route path="" element= {
            indexPage
          } />

          <Route path="/retratos" element= {
            retratosPage
          } />
        </Routes>
      </BrowserRouter>

      <div>
        <Toaster
            position="bottom-center"
            reverseOrder={false}
          />
      </div>
    </>
  )
}

export default App
