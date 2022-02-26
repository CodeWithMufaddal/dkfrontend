import React from 'react'

const FooterBottom = () => {
   return (
      <div>
         <div className="">
            <div className="FooterBottom__icon">
               <i className="fa-solid fa-headphones"></i>
            </div>
            <div className="FooterBottom__contant">
               <span>GOT QUESTION? CALL US 24/7</span>
               <span>(+01) 123 4567 890</span>
               <span>27 lorem ipsum dolor sit amet,</span>
               <span className="text-muted" >Hello constwr 85feg, amidt</span>
               <span className="text-muted" >Find This On Map</span>
            </div>
         </div>


         <div className="">
            <div className="FooterBottom__icon">
               <i className="fa-solid fa-check"></i>
            </div>
            <div className="FooterBottom__contant">
               <span>WE USING SASFE PAYMENTS</span>
               <img src="" alt="Secure Payment icons landscape" />
               <span>Secured By:</span>
               <img src="" alt="Secure Payment macAffe and norton" />

            </div>
         </div>


         <div className="">
            <span>FIND IT FAST</span>
            <div className="">
               <div className="table">
                  <span>Delivery Information</span>
                  <span>My Account</span>
                  <span>Terms & Conditions</span>
                  <span>My Orders</span>
                  <span>Track My Order</span>
               </div>
               <div className="table">
                  <span>Terms & Conditions</span>
                  <span>My Orders</span>
                  <span>Track My Order</span>
                  <span>Privacy Policy</span>
                  <span>Blogs</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FooterBottom