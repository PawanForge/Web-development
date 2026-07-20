import { NavLink, Outlet } from "react-router"
export default function College(){
    return <div className="college" style={{textAlign:'center'}}> 
        <h1>College</h1>
        <NavLink className="Link"to="">Students</NavLink>
        <NavLink className="Link"to="Department">Departments</NavLink>
        <NavLink className="Link" to="Detailes">Detailes </NavLink>
        <Outlet/>
        </div>
}
