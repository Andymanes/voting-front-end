import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"


function State() {
    let { id } = useParams()
    let [state, setState] = useState()

    const eachState = async () => {
        const URL = `https://api.propublica.org/congress/v1/members/senate/${id}/current.json`
        const options = {
            headers: {
                'Content-type': 'application/json',
                'X-API-Key': `ugWVCNHEaD2T3iLIeMniDGwdVrkrOuTKhm75mmxK`
            }
        }
        const data = await fetch(URL, options)
        const result = await data.json()
        console.log(result)
        setState(result.results)
    }
    useEffect(() => {
        eachState()
    },[])
    console.log('State:', state)

    return (
        <>
            <div>Hello world</div>
        </>
    )

}

export default State