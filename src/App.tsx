

import { BrowserRouter } from 'react-router'
import './App.css'
import "../src/features/pages_styles/skills.css"
import "../src/features/pages_styles/about-me.css"
import "../src/features/pages_styles/home.css"
import "../src/features/pages_styles/projects.css"
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
