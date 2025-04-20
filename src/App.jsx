import { useState } from 'react'
import LandingPage from './components/LandingPage.jsx'
import BentoBoxDiv from './components/BentoBoxDiv.jsx'
import './App.css'

function App() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <>
    {isClicked && <BentoBoxDiv />}
      <LandingPage onClickAction={() => {
        setIsClicked(true);
        console.log("clicked");
      }} />
      
    </>
  )
}

export default App
