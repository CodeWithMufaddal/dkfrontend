import React from 'react'

const Recommended = () => {

   const Recommended = [
      { img: "Img/watch.png", originalPrice: "1200", descountedPrice: "1200", rating: 4, title: "Consectetuer Adipiscing Elit" },
      { img: "Img/watch.png", originalPrice: "1200", descountedPrice: "1200", rating: 4, title: "Consectetuer Adipiscing Elit" },
      { img: "Img/watch.png", originalPrice: "1200", descountedPrice: "1200", rating: 4, title: "Consectetuer Adipiscing Elit" },
      { img: "Img/watch.png", originalPrice: "1200", descountedPrice: "1200", rating: 4, title: "Consectetuer Adipiscing Elit" },
      { img: "Img/watch.png", originalPrice: "1200", descountedPrice: "1200", rating: 4, title: "Consectetuer Adipiscing Elit" },
   ]




   return (
      <div>
         <div className="Recommended__title">
            <h3>Recommended For You</h3>
            <div className="">
               <span>New Arrivals</span>
               <span>Best Seller</span>
               <span>Featured</span>
               <span><i className="fa-solid fa-angle-left"></i> <i className="fa-solid fa-angle-right"></i> </span>

            </div>
         </div>

         <div className="Recommended__content">
            <div className="Recommended__contentInner">


               {Recommended.map((Recommended, index) => {
                  const { img, originalPrice, descountedPrice, rating, title } = Recommended
                  return <RecommendedProduct
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


const RecommendedProduct = ({ img, descountedPrice, originalPrice, rating, title }) => {
   return (<div className="Recommended__contentItem">
      <div className="Recommended__contentItemBackground"></div>
      <div className="Recommended__contentItemMain">
         <div className="badge">
            <span>new</span>
            <span><i className="fa-regular fa-heart"></i></span>
         </div>
         <div className="Recommended__contentItem__img">
            <img src={img} alt="" />
         </div>
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
            <button className="btn">Add To Cart</button>
            <div className="Recommended__AddToCompare">Add To Compare</div>
         </div>
      </div>
   </div>
   )
}




export default Recommended