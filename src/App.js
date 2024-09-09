import React from 'react'
import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './components/NotFound'
import About from './components/About'
import Services from './components/Services'
import Hooks from './Data/Hooks'
import Dummy from './Data/Dummy'
import Onepage from './components/Onepage'
import Compone from './Datapassing/Compone'
import CompA from './Context/CompA'
import Header from './components/Header'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/about/:id' element={<Onepage />} />
          <Route path='/services' element={<Services />} />
          <Route path='/hooks' element={<Hooks />} />
          <Route path='/dummy' element={<Dummy />} />
          <Route path='/props' element={<Compone />} />
          <Route path='/context' element={<CompA />} />
          <Route path='/header' element={<Header />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App