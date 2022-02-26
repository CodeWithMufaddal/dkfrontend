import React from 'react'

const Header_End = () => {
   return (
      <div>
         <div className="Header_End_BigPoster">
            <div className="Header_End_BigPosterInner">
               <div className="Header_End_BigPosterInnerLeftSide">
                  <span className="Header_End_BigPosterInnerLeftSide_Heading"> The New Experience You Are Wishing Is Right Here</span>
                  <span className="Header_End_BigPosterInnerLeftSide_HeadingMuted text-muted">Big Screens In Incredibly Slim Design That In Your Hand</span>
                  <button type="button" className="btn"> Browse Now</button>
               </div>
               <div className="Header_End_BigPosterInnerRightSide">
                  <img src="Img/redio.png" alt="redio img" />
               </div>
            </div>
         </div>

         <div className="Header_End_SideGrid">
            <Header_End_SideGridItems img="Img/Watch.png" price="300" title="Letest Watches" />

            <Header_End_SideGridItems img="Img/MobilePhone.png" price="100" title="Mobile phones" />

            <Header_End_SideGridItems img="Img/kitchenwear.png" price="50" title="Kitchen Ware" />

            <Header_End_SideGridItems img="Img/ElectricBlanket.png" price="350" title="Electric Blankets" />

            <Header_End_SideGridItems img="Img/SafeAccessories.png" price="200" title="Safe Accessories" />

            <Header_End_SideGridItems img="Img/binatonephone.png" price="250" title="Binatone Phone" />
         </div>
      </div>
   )
}


const Header_End_SideGridItems = ({ title, img, price }) => {
   return (
      <div className="Header_End_SideGridItems">
         <div className="">
            <div className="Header_End_SideGridItemsLeft">
               <span className="Header_End_SideGridItemsLeft_Heading">{title}</span>
               <span className="Header_End_BigPosterInnerLeftSide_HeadingMuted text-muted">Starting From</span>
               <span>${price}</span>
            </div>
            <div className="Header_End_SideGridItemsRight">
               <img src={img} alt={title + "img"} />
            </div>
         </div>
      </div>
   )
}




export default Header_End