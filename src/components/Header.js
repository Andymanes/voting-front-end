import React from "react"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

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
                        <div>
                            <Link to='/senate/bills' style={{ textDecoration: 'none', color: 'white' }}>Senate Bills</Link>
                        </div>
                    </div>
                    <div className='navLink'>
                        <div>
                            <Link to='/house/bills' style={{ textDecoration: 'none', color: 'white' }}>House Bills</Link>
                        </div>
                    </div>
                </div>
                {/* <div><SearchBar placeholder='Search for rep'></SearchBar></div> */}
            </div>
        </>
    )
}


export default Header