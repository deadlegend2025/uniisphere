import { useState } from 'react'
import Hero from './components/Hero'
import './App.css'
import Front from './components/Front'
import Aboutus from './components/Aboutus/Aboutus'
import People from './components/People/People'
import Education from './components/Education/Education'
import Human from './components/Human/Human'
import Event from './components/Event/Event'
import Guide from './components/Guide/Guide'
import Ngo from './components/NGO/Ngo'
import Goal from './components/Goal/Goal'
import Footer from './components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hero/>
      <Front/>
      <Aboutus/>
      <People/>
      <Education/>
      <Human/>
      <Event/>
      <Guide/>
      <Ngo/>
      <Goal/>
      <Footer/>
      
   
   
    </div>
  )
}

export default App
