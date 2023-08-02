import React from 'react'
import { useState,useEffect } from 'react';
import { useLocation ,Link,NavLink,useNavigate} from 'react-router-dom';

function Header() {
   useEffect(() => {
     window.addEventListener("scroll", isSticky);
     return () => {
       window.removeEventListener("scroll", isSticky);
     };
   });
   /* Method that will fix header after a specific scrollable */
   const isSticky = (e) => {
     const header = document.querySelector(".header-section");
     const scrollTop = window.scrollY;
     scrollTop >= 350
       ? header.classList.add("is-sticky")
       : header.classList.remove("is-sticky");
   };
   const [istoggled, setIstoggled] = useState(false);{/* <Modal /> */}{/* responsiv mobil */}
 
  return (
    <header className="header-section d-none d-xl-block">
      <div className="container">
        {/* <div className="header"> */}
        <div className="mobile-menu">

      <div className={istoggled ? "mobile-menu mobile-menu-open" : ""}>
        <ul className="mobile-menu">
          <button
            id="finish"
            onClick={() => {
              setIstoggled(!istoggled);
            }}
          >
            &times;
          </button>
          <li>
            <NavLink to="category/make-up">Makyaj</NavLink>
          </li>
          <li>
            <NavLink to="category/skin-care">Cild Baxımı</NavLink>
          </li>
          <li>
            <NavLink to="category/hair-care">Saç</NavLink>
          </li>
          <li>
            <NavLink to="category/tools">Fırça və aksesuarlar</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Əlaqə</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">Haqqımızda</NavLink>
          </li>

        </ul>
      </div>

      </div>
        <div className="navbar">
          <div className="logo">
            <NavLink to="/">
              Logo
              {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png" /> */}
            </NavLink>
          </div>
          <ul className="all">
            <li>
              <NavLink to="/contact">Əlaqə</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">Haqqımızda</NavLink>
            </li>
            <li>
              <NavLink to="/">Bloq</NavLink>
            </li>
          </ul>
          <ul className="icon">
            <li className="ket">
              <NavLink to="/basket">
                <i className="fa-solid fa-basket-shopping" />
                {/* <div className="props">{props.basket.length}</div> */}
              </NavLink>
            </li>
            <li className="hear">
              <NavLink to="/fav">
                <i className="fa-solid fa-heart" />
                {/* <div className="props_fav">{fav.length}</div> */}
              </NavLink>
            </li>
            <li>
              {/* <i
                onClick={() =>
                  props.dispatch({
                    type: "OPEN_MODAL",
                  })
                }
                className="fa-solid fa-user"
              /> */}
            </li>
          </ul>

          <i
            className="fa-regular fa-bars mobile-toggle"
            onClick={() => {
              setIstoggled(!istoggled);
            }}
          />
        </div>

        {/* </div> */}
        {/* </div> */}
      </div>
    </header>
  );
}

export default Header