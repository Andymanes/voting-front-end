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
            <h1 className="title">Senate</h1>
            <div className="senatePage">
                <div className="senateStateList">
                    {senate ? senate.map((senator, idx) => {
                        return (
                        <div key={idx}>
                            <Link to={`/senate/state/${senator?.state}`}  style={{ textDecoration: 'none', color: 'black' }} >
                                <h3 className='stateLink'>{senator?.state}</h3>
                            </Link>
                            {/* <Link to={`/rep/${senator.id}`} >
                                <h3>{senator?.last_name}</h3>
                            </Link> */}
                        </div>
                        )
                        }) : <h2>thinking</h2>}
                </div>
            </div>
    </>)
}

export default Senate