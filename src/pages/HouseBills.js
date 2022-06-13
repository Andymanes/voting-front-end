import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Header from '../components/Header'

function HouseBills() {
  let [bills, getBills] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/house/bills')
      .then(response => {
        console.log('Response:', response)
        return response.json()
      })
      .then(data => {
        console.log('Data:', data)
        getBills(data?.results[0].bills)

      })
  }, [])
  console.log('Bills', bills)
  if (!bills) return <p>loading...</p>


  return (
    <>
      <Header></Header>
      <div className='title'>Bills</div>
      <div className='billList'>
        {bills ? bills.map((bill, idx) => {
          return (
            <div key={idx}>
              <div>{bill?.title}</div>
              <Link to={`/bill/${bill?.bill_slug}`}><h3>{bill?.bill_slug}</h3></Link>
            </div>
          )
        }) : <h2>Loading...</h2>}
      </div>
      
    </>
  )
}

export default HouseBills