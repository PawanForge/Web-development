import { Navigate,Routes,Route} from "react-router"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NavBar from "./NavBar"
import College from "./College"
import ClgStudent from "./ClgStudent"
import ClgDepartment from "./ClgDepartment"
import ClgDetailes from "./ClgDetailes"
/*import PageNotFound from "./PageNotFound"*/
export default function App(){
  return(
    <>
    <Routes>
    <Route element={<NavBar/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
    
    </Route>
    
      <Route path="/college" element={<College/>}>
     <Route path="student" element={<ClgStudent/>}/>
     <Route path="Department" element={<ClgDepartment/>}/>
     <Route path="Detailes" element={<ClgDetailes/>}/>
     
      </Route>
      {/*<Route path="/*" element={<PageNotFound/>}/>*/}
      <Route path="/*" element={<Navigate to="/"/>}/>
      </Routes>
    </>
  )
}
