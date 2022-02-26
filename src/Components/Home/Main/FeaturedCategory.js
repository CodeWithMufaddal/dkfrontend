import React from 'react'

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
      <div>
         <div className="Category">
            <div className="Category__Heading"><span>FEATURED CATEGORY</span></div>

            {CategorySection.map((CategorySection, index) => {
               return (
                  <FeaturedCategorySection key={index} img={CategorySection[0]} title={CategorySection[1]} />
               )
            })}

         </div>



         <div className="Poster">
            <div className="PosterSize">
               <img src="" alt="posters" />
            </div>
            <div className="PosterSize">
               <img src="" alt="posters" />
            </div>

         </div>
      </div>
   )
}


const FeaturedCategorySection = ({ img, title }) => {
   return (
      <div className="Category__section">
         <div className="Category__sectionimg">
            <img src={img} alt="img" />
         </div>
         <div className="Category__sectiontitle">{title}</div>
      </div>


   )
}




export default FeaturedCategory