import React, { useState, useEffect } from 'react'

const Header_Top = () => {
   const exchangeratesapi = process.env.REACT_APP_EXCHANGERATESAPI;
   const [currancy, setCurrancy] = useState("https://cdn-icons-png.flaticon.com/512/206/206626.png")
   const fetchData = async () => {
      const result = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${exchangeratesapi}&symbols=USD,EUR,INR`)
      const json = await result.json()
      console.log(json.rates.USD)
   }
   const onChange = (e) => {
      fetchData()
      setCurrancy(e.target.value)
      console.log({ value: e.target.value })
   }
   const Currancy = [   // Array of Currancy
      ['https://cdn-icons-png.flaticon.com/512/206/206626.png', 'USD', '$'],
      ['https://cdn-icons-png.flaticon.com/512/206/206606.png', 'INR', '₹'],
      ['https://cdn-icons-png.flaticon.com/512/206/206593.png', 'EUR', '€']
   ]

   return (
      <div className="Header__top">
         <div className="Header__top_Contact">
            <i className="fa-solid fa-phone" style={{ color: "darkblue" }}></i>
            <span className="Header__TopContactSpan">EXPORT</span>
            <span className="Header__TopContactSpan">+44161 832 5200</span>
         </div>

         <div className="Header__top_Contact">
            <i className="fa-solid fa-phone" style={{ color: "darkblue" }}></i>
            <span className="Header__TopContactSpan">ELECTRICAL</span>
            <span className="Header__TopContactSpan">+44161 832 5200</span>
         </div>

         <div className="Header__top_Contact">
            <i className="fa-solid fa-phone" style={{ color: "darkblue" }}></i>
            <span className="Header__TopContactSpan">WATCHES</span>
            <span className="Header__TopContactSpan">+44161 832 5200</span>
         </div>

         <div className="Header__top_Contact">
            <div className="flag">
               <img src={currancy} alt="flag" />
            </div>

            <select name="currancy" id="currancy" onChange={onChange}>
               {Currancy.map((currancy, index) => {
                  return (<option key={index} value={currancy[0]}>{currancy[1]} {currancy[2]}</option>)
               })}
            </select>
         </div>
      </div >
   )
}

export default Header_Top