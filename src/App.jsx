import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Main from './Components/Main.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page-container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
