import React from 'react'
import './Header_End.css'

const Header_End = () => {
   return (
      <div className="Header__End">
         <div className="Header_End_BigPoster">
            {/* <div className="Header_End_BigPosterInner">
               <div className="Header_End_BigPosterInnerLeftSide">
                  <span className="Header_End_BigPosterInnerLeftSide_Heading"> The New Experience You Are Wishing Is Right Here</span>
                  <span className="Header_End_BigPosterInnerLeftSide_HeadingMuted text-muted">Big Screens In Incredibly Slim Design That In Your Hand</span>
                  <button type="button" className="btn"> Browse Now</button>
               </div>
               <div className="Header_End_BigPosterInnerRightSide">
                  <img src="Img/redio.png" alt="redio img" />
               </div>
            </div> */}
            <img src="http://magento2.templatemela.com/v19/MAG261/skin/frontend/templatemela/MAG110227_1/images/banners/main-banner1.jpg" className="w-100" alt="" />
         </div>

         <div className="Header_End_SideGrid">
            <Header_End_SideGridItems img="Img/Watch.png" price="300" title="Letest Watches" />

            <Header_End_SideGridItems alt="alternateEffect" img="Img/MobilePhone.png" price="100" title="Mobile phones" />

            <Header_End_SideGridItems alt="alternateEffect" img="Img/kitchenwear.png" price="50" title="Kitchen Ware" />

            <Header_End_SideGridItems img="Img/ElectricBlanket.png" price="350" title="Electric Blankets" />

            <Header_End_SideGridItems img="Img/SafeAccessories.png" price="200" title="Safe Accessories" />

            <Header_End_SideGridItems alt="alternateEffect" img="Img/binatonephone.png" price="250" title="Binatone Phone" />
         </div>
      </div>
   )
}


const Header_End_SideGridItems = ({ title, img, price , alt }) => {
   return (
      <div className={`Header_End_SideGridItems ${alt}`}>
         <div className="Header_End_SideGridItemsInner">
            <div className="Header_End_SideGridItemsLeft">
               <span className="Header_End_SideGridItemsLeft_Heading">{title}</span>
               <span className="Header_End_BigPosterInnerLeftSide_HeadingMuted text-muted">Starting From</span>
               <span className="price">${price}</span>
            </div>
            <div className="Header_End_SideGridItemsRight">
               <img src={img} className="w-100" alt={title + "img"} />
            </div>
         </div>
      </div>
   )
}




export default Header_End