import { BrowserRouter,Routes, Route } from 'react-router-dom'

import './App.css'
import LandingPages from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import Login from './pages/Lo2'
import Signup from './pages/Signup'
import Workspace from './pages/Workspace'
import Toggle from './pages/Toggle'
import Work from './pages/Work'
function App() {
 

  return (
    <>
    
    {/* <LandingPage/>  
     */}
    {/* <Login/> */}
    {/* <Signup/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Workspace" element={<Workspace/>} />       {/* //for testing purpose */}
        <Route path="/toggle" element={<Toggle/>} />          {/* cahnge name to form */}
        <Route path="/work" element={<Work/>} />              {/* //for testing purpose */}
        
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
