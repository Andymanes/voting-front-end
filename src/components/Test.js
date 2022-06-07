import React, { useState, useEffect } from "react"


function Test() {
    let [test, getTest] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/api')
        .then(response => {
            console.log('Response:', response)
            return response.json()
        })
        .then(data => {
            console.log('Data:', data)
            getTest(data)

        })
    },[])
    console.log(test)

    return (<div>{test.text}</div>)
}

export default Test