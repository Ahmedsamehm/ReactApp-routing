import React, { useEffect, useState } from "react";
import "./Home.css";


export default function Home() {



 

  




  return (
          <section className="HeroSection ">
        <div className="container ">
          <div className="grid grid-cols-1 ">
            <div className="flex flex-col  justify-center items-center p-20 pt-32  ">
              <div className="contentHolder w-fit text-center space-y-4 text-white ">
                <img
                  src="./src/images/avataaars.aa9aff02ddd0ef36a1724ecef4133df9.svg"
                  className="w-80 mx-auto"
                  alt="image"
                />
                <h1 className="lg:text-9xl md:text-5xl sm:text-5xl ">
                  START REACT
                </h1>
                <div className="flex justify-center align-baseline items-center  ">
                  <span className="barStar w-36 "> </span>
                  <i class="fa-solid fa-star px-3 text-4xl "></i>
                  <span className="barStar  w-36"> </span>
                </div>
                <p className="text-2xl">
                  Graphic Artist - Web Designer - Illustrator
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> 
  );
}
