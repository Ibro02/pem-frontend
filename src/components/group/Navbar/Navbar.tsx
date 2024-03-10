import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook, faSliders, faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      <nav className="w-full bg-neutral-200 h-14 px-20 text-xs md:text-xl flex flex-wrap content-start justify-center m-auto flex-col gap-8 font-extrabold text-neutral-700 font-sans transition-all duration-500 z-1">
        <button type="button" className=" w-10 h-7 gap-2"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasWithBothOptions">
          <FontAwesomeIcon icon={faBars} className="text-3xl hover:text-gray-800"/>
        </button>
        <div className="flex flex-row flex-wrap justify-center items-center m-auto">
          <img src={Logo} className="h-12"/>
          <h2>UČI NA SVOJ NAČIN</h2>
        </div>
      </nav>

      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="offcanvasScrollingLabel"> EDUCATIONAPP</h2>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
        </div>
        <div className="offcanvas-body font-sans text-xl flex flex-col gap-8 cursor-pointer">
          <NavLink to="/home" className="flex gap-3 hover:text-gray-600">
            <FontAwesomeIcon icon={faHome}/>
            <h3 >Početna</h3>
          </NavLink>
          <NavLink to="/lectures" className="flex gap-3 hover:text-gray-600" >
            <FontAwesomeIcon icon={faBook}/>
            <h3>Lekcije</h3>
          </NavLink>

          <NavLink to="/settings" className="flex gap-3 hover:text-gray-600">
            <FontAwesomeIcon icon={faSliders}/>
            <h3>Postavke</h3>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
