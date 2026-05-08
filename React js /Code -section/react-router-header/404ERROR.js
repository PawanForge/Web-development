import { Link } from "react-router"
export default function PageNotFound(){
    return(
        <div>
            <h1>
                Page Not Found 
            </h1>
            <div>
                <Link to="/">Go to home page</Link>
            </div>
            
            <img atyle={{width:"60%" ,height:"60%"}}src="https://img.magnific.com/free-vector/glitch-error-404-page-background_23-2148090410.jpg?semt=ais_hybrid&w=740&q=80"></img>
        </div>
    )
}
