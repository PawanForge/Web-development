import { Link, Outlet } from "react-router"
import "./header.css"
export default function NavBar(){
    return (
    <div>
    <div className="header">
        <div>
           <Link className="Link" ><h2>Logo</h2></Link>
        </div>
        <div>
            <ul>
                <li>
                    <Link className="Link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="Link " to="/about">About</Link>
                </li>
                <li>
                    <Link className="Link" to="/login">Login</Link> 
                </li>
                <li>
                    <Link className="Link" to="/college">College</Link> 
                </li>
            </ul>
        </div>
    </div>
    <Outlet/>
    </div>
    )
}
