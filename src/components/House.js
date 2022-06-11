import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

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
            <h1>House</h1>
            <div className='houseList'>
                {house ? house.map((houseRep, idx) => {
                    return (
                        <div key={idx}>
                        <h2>{houseRep?.state}</h2>
                        <Link to={`/rep/${houseRep.id}`} >
                            <h3>{houseRep?.last_name}</h3>
                        </Link>
                    </div>
                    )
                }) : <h2>thinking</h2>}
            </div>
        
        
        </>
    )

}


export default House