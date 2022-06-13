import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Header from '../components/Header'

function House() {
    let [house, getHouse] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/house')
        .then(response => {
            console.log('Response:', response)
            return response.json()
        })
        .then(data => {
            console.log('Data:', data)
            getHouse(data.results[0].members)
        })
    },[])
    console.log('House:', house)
    if (!house) return <p>loading...</p>

    return (
        <>
            <Header></Header>
            <h1 className='title'>House</h1>
            <div className='houseStateList'>
                {house ? house.map((houseRep, idx) => {
                    return (
                        <div key={idx}>
                            <Link to={`/house/state/${houseRep?.state}`} className='stateLink' style={{ textDecoration: 'none', color: 'black' }}>
                                <h3 className='stateLink'>{houseRep?.state}</h3>
                            </Link>
                        
                        </div>
                    )
                }) : <h2>thinking</h2>}
            </div>
        
        
        </>
    )

}


export default House