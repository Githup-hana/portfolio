

import { BrowserRouter } from 'react-router'
import './App.css'
import MainNavbar from './features/navigation/MainNavbar'
import AllRouts from './features/routing/AllRoutes'

function App() {


  return (
    <BrowserRouter>
      <MainNavbar />
     <AllRouts/>
    </BrowserRouter>
  )
}

export default App
