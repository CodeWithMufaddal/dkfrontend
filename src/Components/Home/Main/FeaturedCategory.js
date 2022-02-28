import React from 'react'
import './FeaturedCategory.css'
const FeaturedCategory = () => {
   const CategorySection = [
      ["Img/watch.png", "Audio & Videos"],
      ["Img/watch.png", "Audio & Videos"],
      ["Img/watch.png", "Audio & Videos"],
      ["Img/watch.png", "Audio & Videos"],
      ["Img/watch.png", "Audio & Videos"],
      ["Img/watch.png", "Audio & Videos"],
      ["Img/watch.png", "Audio & Videos"]
   ]
   return (
      <div className="Category">
         <div className="Category__Collection" >
            <div className="Category__Heading"><span>FEATURED CATEGORY</span></div>
            <div className="d-flex" style={{justifyContent: 'space-around'}}>

               {CategorySection.map((CategorySection, index) => {
                  return (
                     <FeaturedCategorySection key={index} img={CategorySection[0]} title={CategorySection[1]} />
                  )
               })}
            </div>

         </div>



         <div className="Poster">
            <div className="PosterSize1">
               <img src="Img/watch.png" className="w-100" alt="posters" />
            </div>
            <div className="PosterSize2">
               <img src="Img/watch.png" className="w-100" alt="posters" />
            </div>

         </div>
      </div>
   )
}





const FeaturedCategorySection = ({ img, title }) => {
   return (
      <div className="Category__section">
         <div className="Category__sectionimg">
            <img src={img} className="w-100" alt="img" />
         </div>
         <div className="Category__sectiontitle">{title}</div>
         <div className="" style={{ height: "60px" }}>
            <a href="/" className="Category__secctiontitleCollection text-muted">Collection</a>
         </div>
      </div>


   )
}




export default FeaturedCategory