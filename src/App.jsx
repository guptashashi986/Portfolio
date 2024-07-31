
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from "./components/About"
import Portfolio from './components/Portfolio'
import Exprience from './components/Exprience'
import Footer from "./components/Footer"
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <>
      <div>
      <Home/>
      <Navbar/>
      <About/>
      <Portfolio/>
      <Exprience/>
      <Contact/>
      <Footer/>
      </div>
      <Toaster/>

    </>
  )
}

export default App