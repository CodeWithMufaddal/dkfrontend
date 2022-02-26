import React from 'react'
import DealsOfTheWeek from './DealsOfTheWeek'
import FeaturedCategory from './FeaturedCategory'
import Recommended from './Recommended'

const Main = () => {
  return (
    <div>
      <FeaturedCategory />
      <Recommended />
      <DealsOfTheWeek />
    </div>
  )
}

export default Main