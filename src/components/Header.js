import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <div className="nav">
                <div className='navbar'>
                    <div className='navLink'>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                    </div>
                    <div className='navLink'>
                        <Link to='/senate' style={{ textDecoration: 'none', color: 'white' }}>Senate</Link>
                    </div>
                    <div className='navLink'>
                        <Link to='/house' style={{ textDecoration: 'none', color: 'white' }}>House</Link>
                    </div>
                    <div className='navLink'>
                        <div>bills Link</div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Header