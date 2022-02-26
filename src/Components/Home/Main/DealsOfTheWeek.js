import React from 'react'

const DealsOfTheWeek = () => {

   const DealsOfTheWeek = [
      { img: "Img/watch.png", originalPrice: "1200", descountedPrice: "1200", rating: 4, title: "Consectetuer Adipiscing Elit" },
      { img: "Img/watch.png", originalPrice: "1200", descountedPrice: "1200", rating: 4, title: "Consectetuer Adipiscing Elit" },
      { img: "Img/watch.png", originalPrice: "1200", descountedPrice: "1200", rating: 4, title: "Consectetuer Adipiscing Elit" },
      { img: "Img/watch.png", originalPrice: "1200", descountedPrice: "1200", rating: 4, title: "Consectetuer Adipiscing Elit" },
      { img: "Img/watch.png", originalPrice: "1200", descountedPrice: "1200", rating: 4, title: "Consectetuer Adipiscing Elit" },
      { img: "Img/watch.png", originalPrice: "1200", descountedPrice: "1200", rating: 4, title: "Consectetuer Adipiscing Elit" },
   ]



   return (
      <div>
         <div className="Recommended__title">
            <h3>Deals Of The Week</h3>
            <div className="">
               <span><i className="fa-solid fa-angle-left"></i> <i className="fa-solid fa-angle-right"></i> </span>
            </div>
         </div>

         <div className="Recommended__content">
            <div className="Recommended__contentInner">
               {DealsOfTheWeek.map((DealsOfTheWeek, index) => {
                  const { img, originalPrice, descountedPrice, rating, title } = DealsOfTheWeek
                  return <DealsOfWeekProduct
                     key={index}
                     img={img}
                     originalPrice={originalPrice}
                     descountedPrice={descountedPrice}
                     rating={rating}
                     title={title}
                  />
               })}

            </div>
         </div>
      </div>
   )
}


const DealsOfWeekProduct = ({ img, descountedPrice, originalPrice, rating, title }) => {
   return (
      <div className="Recommended__contentItem">
         <div className="Recommended__contentItemMain">
            <div className="">
               <div className="Recommended__contentItem__img">
                  <img src={img} alt="" />
               </div>
            </div>
            <div className="">
               <div className="Recommended__contentItem__info">
                  <div className="Recommended__Price">
                     <span className="discountedPrice">${originalPrice}</span>
                     <span className="price">${descountedPrice}</span>
                  </div>
                  <div className="Recommended__title">
                     <span>{title}</span>
                  </div>
                  <div className="Recommended__rating">

                     {Array(rating).fill().map((_, i) => {
                        return <span key={i}>⭐</span>
                     })}
                  </div>
               </div>
               <div className="Recommended__hiddenbtn">
                  <button className="btn">Shop Now</button>
                  <div className="Recommended__AddToCompare">Add To Compare</div>
                  <span><i className="fa-regular fa-heart"></i>Add To Wishlist</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default DealsOfTheWeek