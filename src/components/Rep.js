import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Rep (props) {
    let { id } = useParams()
    let [rep, setRep] = useState({})

    const getApiData = async () => {
        const URL = `https://api.propublica.org/congress/v1/members/${id}.json`
        const options = {
            headers: {
                'Content-type': 'application/json',
                'X-API-Key': `ugWVCNHEaD2T3iLIeMniDGwdVrkrOuTKhm75mmxK`
            }
        }
        const data = await fetch(URL, options)
        const result = await data.json()
        console.log(result)
        setRep(result)
    }
    useEffect(() => {
        getApiData()
        
    },[])
    console.log(rep)
    console.log(id)

    return (
        <>
            <div>{JSON.stringify(rep.results[0].first_name)}</div>
        </>
    )
}


export default Rep