import { Fragment, useState } from 'react'

import {Routes, Route, BrowserRouter} from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navigation from './components/general/Navigation'
import Index from './pages/Index'
import {Toaster} from 'react-hot-toast'

const indexPage = (
  <Index/>
)
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Toaster
            position="bottom-center"
            reverseOrder={false}
          />
      </div>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="" element= {
            indexPage
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
