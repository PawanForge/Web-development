import { Routes,Route} from "react-router"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NavBar from "./NavBar"
export default function App(){
  return(
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}
