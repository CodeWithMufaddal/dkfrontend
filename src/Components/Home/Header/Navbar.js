import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const hover = () => {
    alert('Hover')
  }



  const NavbarCategories = [
    ['Watches', [
      {
        name: 'Watches',
        link: "/"
      },
      {
        name: 'leather',
        link: "/"
      },
      {
        name: 'rest',
        link: "/"
      },
    ],
    ]
  ]
  return (
    <div className="Header__Navbar">
      <div className="">
        {/* Navbar Top Logo , input . links  */}
        <div className="">
          {/*  Navbar Top Logo */}
          <div className="Header__NavbarLogo">
            <img src="Img/dk_logo.jpg" alt="Logo" />
          </div>
          {/*  Search Input */}
          <div className="Header__NavbarInput">
            <input type="search" name="search" id="search" />
            <button type="submit">Search</button>
          </div>

          {/*  Last 3 icon options */}
          <div className="Header__option">
            <div className="Header__NavbarIcon">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="Header__NavbarIcon">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="Header__NavbarIcon">
              <div className="Header__NavbarBasketBadeg">
                0
              </div>
              <i className="fa-solid fa-bag-shopping"></i>
            </div>
          </div>
        </div>


        {/*  Navbar Categories */}
        {/* <div className="">
          <div className="Header__NavbarCategories">
            <select name="" id="" value="Watches" onMouseUp={hover} className="">
              <option value="Watches" disabled hidden>Watches</option>
              <option value="Leater Watches" >Leater Watches</option>
            </select>
          </div>
          {NavbarCategories.map((Navcategory, index) => {
            return <select name="" id="">
              {Navcategory[1].map((NavSubcategory, index) => {
                return <Link to={NavSubcategory.Link}>
                  <option key={index} value={NavSubcategory.name}>{NavSubcategory.name}</option>
                </Link>
              })}
              {console.log(Navcategory, index)}
            </select>
          })}

          <div className="Header__NavbarCategories">
            <select name="" id="" value="Watches" className="">
              <option value="Watches" disabled hidden>Domestic Appliances</option>
              <option value="Leater Watches" >Leater Watches</option>
            </select>
          </div>

          <div className="Header__NavbarCategories">
            <select name="" id="" value="Watches" className="">
              <option value="Watches" disabled hidden>Electricals</option>
              <option value="Leater Watches" >Leater Watches</option>
            </select>
          </div>

          <div className="Header__NavbarCategories">
            <select name="" id="" value="Watches" className="">
              <option value="Watches" disabled hidden>Home & Outdor</option>
              <option value="Leater Watches" >Leater Watches</option>
            </select>
          </div>

          <div className="Header__NavbarCategories">
            <select name="" id="" value="Watches" className="">
              <option value="Watches" disabled hidden>Domestic King</option>
              <option value="Leater Watches" >Leater Watches</option>
            </select>
          </div>

          <div className="Header__NavbarCategories">
            <select name="" id="" value="Watches" className="">
              <option value="Watches" disabled hidden>Personal Care</option>
              <option value="Leater Watches" >Leater Watches</option>
            </select>
          </div>

          <div className="Header__NavbarCategories">
            <select name="" id="" value="Watches" className="">
              <option value="Watches" disabled hidden>Audio & Videos</option>
              <option value="Leater Watches" >Leater Watches</option>
            </select>
          </div>

          <div className="Header__NavbarCategories">
            <select name="" id="" value="Watches" className="">
              <option value="Watches" disabled hidden>Batteries</option>
              <option value="Leater Watches" >Leater Watches</option>
            </select>
          </div>

          <div className="Header__NavbarCategories">
            <select name="" id="" value="Watches" className="">
              <option value="Watches" disabled hidden>Toy</option>
              <option value="Leater Watches" >Leater Watches</option>
            </select>
          </div>

          <div className="Header__NavbarCategories">
            <select name="" id="" value="Watches" className="">
              <option value="Watches" disabled hidden>Brands</option>
              <option value="Leater Watches" >Leater Watches</option>
            </select>
          </div>


        </div> */}

      </div>
    </div>
  )
}

export default Navbar