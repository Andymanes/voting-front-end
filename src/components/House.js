import React, { useState, useEffect } from 'react'

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
            <h1>house</h1>
            <div className='houseList'>
                {house ? house.map((houseRep, idx) => {
                    return (
                        <div key={idx}>
                            <h3>{houseRep?.last_name}</h3>
                        </div>
                    )
                }) : <h2>thinking</h2>}
            </div>
        
        
        </>
    )

}


export default House