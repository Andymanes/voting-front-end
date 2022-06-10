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
    console.log(senate)
    if (!senate) return <p>loading...</p>
    
    return (<div>
        <p>hey</p>
        <div>{senate[0].id}</div>
    </div>)
}

export default Senate