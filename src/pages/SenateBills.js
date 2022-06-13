import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Header from '../components/Header'

function SenateBills() {
  let [bills, getBills] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/senate/bills')
      .then(response => {
        console.log('Response:', response)
        return response.json()
      })
      .then(data => {
        console.log('Data:', data)
        getBills(data?.results[0])

      })
  }, [])
  console.log('Bills', bills)
  if (!bills) return <p>loading...</p>


  return (
    <>
      <Header></Header>
      <div>Bills</div>
      {/* <div className='billList'>
        {bills ? bills.map((bill, idx) => {
          return (
            <div key={idx} >
              <Link to={`/bill/${bill?.bill_id}`} />
              <h3>{bill?.title}</h3>
            </div>
          )
        }) : <h2>Loading...</h2>}
      </div> */}
    </>
  )
}

export default SenateBills