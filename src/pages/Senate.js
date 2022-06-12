import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Header from '../components/Header'


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
            <Header></Header>
            <h1>Senate</h1>
            <div className="senateList">
                {senate ? senate.map((senator, idx) => {
                    return (
                    <div key={idx}>
                        <Link to={`/senate/state/${senator?.state}`} >
                            <h3>{senator?.state}</h3>
                        </Link>
                        {/* <Link to={`/rep/${senator.id}`} >
                            <h3>{senator?.last_name}</h3>
                        </Link> */}
                    </div>
                    )
                    }) : <h2>thinking</h2>}
            </div>
    </>)
}

export default Senate