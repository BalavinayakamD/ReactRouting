import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Main from "./Pages/Main"
import About from "./Pages/About"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
      <Route path="/about" element={<About />} />
    </Routes>
    
    </>
  )
}

export default App
