import React, { useState, useEffect } from 'react'

function AL() {
    let [state, setState] = useState()

    const thisState = async () => {
        const URL = `https://api.propublica.org/congress/v1/members/senate/AL/current.json`
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
        thisState()
    },[])
    console.log('State:', state)

  return (
    <div>AL</div>
  )
}

export default AL