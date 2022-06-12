import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <nav className="nav">
            <Link to='/' >
                <div>Home</div>
            </Link>
            <Link to='/senate' >
                <div>Senate</div>
            </Link>
            <Link to='/house' >
                <div>House of Reps</div>
            </Link>
        </nav>
    )
}


export default Header