import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"


function Senate() {
    let [senate, getSenate] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/senate')
        .then(response => {
            console.log('Response:', response)
            return response.json()
        })
        .then(data => {
            console.log('Data:', data)
            getSenate(data.results[0].members)
            
        })
    },[])
    console.log('Senate', senate)
    if (!senate) return <p>loading...</p>
    
    return (
        <>

            <h1>Senate</h1>
            <div className="senateList">
                {senate ? senate.map((senator, idx) => {
                    return (
                    <div key={idx}>
                        <h2>{senator?.state}</h2>
                        <Link to={`/rep/${senator.id}`} >
                            <h3>{senator?.last_name}</h3>
                        </Link>
                    </div>
                    )
                    }) : <h2>thinking</h2>}
            </div>
    </>)
}

export default Senate