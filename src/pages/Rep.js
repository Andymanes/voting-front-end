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
            <div className='repBio'>
                <h1>{rep?.first_name} {rep.last_name}</h1>
                <h2>Representative for {repRole?.state}</h2>
                <h2>Residing in the {repRole?.chamber} since {repRole?.start_date}</h2>
                <h3>Politial Party ({rep?.current_party})</h3>
                <h3>Since been in office, has not participated in {repRole?.missed_votes_pct}% potential votes</h3>
                <h3>Votes with party {repRole?.votes_with_party_pct}% of the time</h3>
                <h2 className='contactInfo'>Contact info:
                    <h5>Phone Number {repRole?.phone}</h5>
                    <h5>Office: {repRole?.office}</h5>
                </h2>
            </div>
        </>
    )
}


export default Rep