
import './App.css'

import PriceOptions from './PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBAr/NavBar'
import Phones from './components/Phones/Phones'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>
      
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
