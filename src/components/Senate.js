import React, { useState, useEffect } from "react"


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

            <p>hey</p>
            <div className="senateList">
                {senate ? senate.map((senator, idx) => {
                    return (
                    <div key={idx}>
                        <h3>{senator?.last_name}</h3>
                    </div>
                    )
                    }) : <h2>thinking</h2>}
            </div>
    </>)
}

export default Senate