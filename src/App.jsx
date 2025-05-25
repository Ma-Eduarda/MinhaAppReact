import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Main from './Components/Main.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="page-container">
        <Header/>
        <Main/>
        <div className="content-wrap"></div>
        <Footer/>
      </div>
      <div/>
    </>
  )
}

export default App
