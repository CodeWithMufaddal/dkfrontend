import React, { useState, useEffect } from 'react'
import './Header_Top.css'

const Header_Top = () => {
   const exchangeratesapi = process.env.REACT_APP_EXCHANGERATESAPI;
   const fetchData = async () => {
      const result = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${exchangeratesapi}&symbols=USD,EUR,INR`)
      const json = await result.json()
      console.log(json.rates.USD)
   }
   
   
   // To Change the State 
   const [currancy, setCurrancy] = useState("https://cdn-icons-png.flaticon.com/512/206/206626.png")

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
      <div className="Header__top d-flex">
         <div className="Header__top_Contact">
            <i className="fa-solid fa-phone icon" style={{ color: "darkblue" , marginRight: "5px" }}></i>
            <span className="Header__TopContactSpan">EXPORT</span>
            <span className="Header__TopContactSpan">+44161 832 5200</span>
         </div>

         <div className="Header__top_Contact">
            <i className="fa-solid fa-phone icon" style={{ color: "darkblue" , marginRight: "5px" }}></i>
            <span className="Header__TopContactSpan">ELECTRICAL</span>
            <span className="Header__TopContactSpan">+44161 832 5200</span>
         </div>

         <div className="Header__top_Contact">
            <i className="fa-solid fa-phone icon" style={{ color: "darkblue" , marginRight: "5px" }}></i>
            <span className="Header__TopContactSpan">WATCHES</span>
            <span className="Header__TopContactSpan">+44161 832 5200</span>
         </div>

         <div className="Header__top_Contact border-none">
            <div className="flag">
               <img src={currancy} className="flagimg " alt="flag" />
            </div>

            <select name="currancy" id="currancy" className="currancy" onChange={onChange}>
               {Currancy.map((currancy, index) => {
                  return (<option key={index} className="currancy option" value={currancy[0]}>{currancy[1]} {currancy[2]}</option>)
               })}
            </select>
         </div>
      </div >
   )
}

export default Header_Top