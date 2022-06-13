import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../components/Header'

function Bill(props) {
    let { id } = useParams()
    let [bill, setBill] = useState({})

    const billData = async () => {
        const URL = `https://api.propublica.org/congress/v1/11/bills/${id}.json`
        const options = {
            headers: {
                'Content-type': 'application/json',
                'X-API-Key': `ugWVCNHEaD2T3iLIeMniDGwdVrkrOuTKhm75mmxK`
            }
        }
        const data = await fetch(URL, options)
        const result = await data.json()
        setBill(result)
    }
    useEffect(() => {
        billData()
    },[])
    console.log('Bill', bill)
    
    return(
        <>Still, NOT, WORKING......</>
    )
}


export default Bill