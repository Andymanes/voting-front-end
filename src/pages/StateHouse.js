import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers"
import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Header from '../components/Header'


function StateHouse() {
    let { id } = useParams()
    let [state, setState] = useState()

    const eachState = async () => {
        const URL = `https://api.propublica.org/congress/v1/members/house/${id}/current.json`
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
            <Header></Header>
            <h1 className="title">House of Reps</h1>
            <div className="repList">
                {state ? state.map((state, idx) => {
                    return (
                    <div key={idx} >
                        {/* <Link to={`/senate/state/${state?.state}`} > */}
                            {/* <h3>{state?.name}</h3> */}
                        {/* </Link> */}
                        <Link to={`/rep/${state.id}`}  style={{ textDecoration: 'none' }}>
                            <h3 className='repLink'>{state?.name} ({state?.district})</h3>
                        </Link>
                    </div>
                    )
                    }) : <h2>thinking</h2>}
            </div>
        </>
    )

}

export default StateHouse