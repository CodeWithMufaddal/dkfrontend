import React from 'react'

const FooterTop = () => {
   return (
      <div>
         <div className="FooterTop__brands">
            <img src="" alt="" />
         </div>

         <div className="FooterTop__social">
            <div className="FooterTop__ad">
               <div className="FooterTop__adIcon">
                  <i className="fa-solid fa-paper-plane"></i>
               </div>
               <div className="FooterTop__socialadtitle">
                  <h4>Sign Up For Newsletter</h4>
                  <span>...And Receive $20 Coupon For Frist Shopping</span>
               </div>
            </div>

            <form action="" className="FooterTop__Subscribe">
               <input type="email" placeholder="Subscribe For Letest Updates" />
               <button type="submit" className="btn">Subscribe</button>
            </form>

            <div className="FooterTop__Follow">
               <h4>Follow Us:</h4>
               <div className="FooterTop__FollowIcons">
                  <div className="FooterTop__FollowIcon">
                     <i className="fa-brands fa-facebook-f"></i>
                  </div>

                  <div className="FooterTop__FollowIcon">
                     <i className="fa-brands fa-twitter"></i>
                  </div>

                  <div className="FooterTop__FollowIcon">
                     <i className="fa-brands fa-linkedin-in"></i>
                  </div>

                  <div className="FooterTop__FollowIcon">
                     <i className="fa-brands fa-instagram"></i>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FooterTop