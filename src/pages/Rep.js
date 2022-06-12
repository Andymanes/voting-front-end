import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../components/Header'


function Rep (props) {
    let { id } = useParams()
    let [rep, setRep] = useState({})
    let [repRole, setRepRole] = useState()

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
        // console.log(result)
        setRep(result.results[0])
        setRepRole(rep.roles[0])
        
    }
    useEffect(() => {
        getApiData()
        
    },[])
    console.log('Rep:', rep)
    console.log('repRole:', repRole)
    return (
        <>
            <Header></Header>
            <div>{rep?.first_name} {rep.last_name}</div>
            <div>state {repRole?.state}</div>
            <div>Politial Party ({rep.current_party})</div>
        </>
    )
}


export default Rep