import React, { useState } from "react";
import "./Portfolio.css";
export default function Portfolio() {
  const [CardsData] = useState([
    {
      title: "LOG CABIN",
      img: "./src/images/cabin.4417330275f78faa31c3.png",
    },
    {
      title: "TASTY CAKE",
      img: "./src/images/cake.6554473016d32b343f02.png",
    },
    {
      title: "CIRCUS TENT",
      img: "./src/images/circus.494a4a914b5471b41f3e.png",
    },
    {
      title: "CONTROLLER",
      img: "./src/images/game.a940b57aa7bab2eacc52.png",
    },
    {
      title: "LOCKED SAFE",
      img: "./src/images/safe.01792c0bdc342bf4bf9c.png",
    },
    {
      title: "submarine",
      img: "./src/images/submarine.48c9704ca7f8ce901038.png",
    },
  ]);

  const [showModel, setShowModel] = useState(false);
  const [ModelData, setModelData] = useState();

  console.log(CardsData);
  function displayCard(index) {
    setShowModel(false);
    setModelData(CardsData[index]);
    setShowModel(true);
  }
  function exit() {
    setShowModel(false);
  }
  return (
    <>
      <section className="lg:px-32 py-10 relative ">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center text-slate-800">
            Portfolio
          </h1>
          <div className="flex justify-center align-baseline items-center   text-slate-800 ">
            <span className="h-2 rounded-lg w-36 bg-slate-800 "> </span>
            <i class="fa-solid fa-star px-3 text-4xl "></i>
            <span className="h-2 rounded-lg  w-36 bg-slate-800"> </span>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-1  gap-4  p-5">
            {CardsData.map((cardData, index) => {
              return (
                <div
                  key={index}
                  data-index-target={index}
                  className="col-span-1"
                >
                  <div
                    onClick={() => {
                      displayCard(index);
                    }}
                    className="cardHolder relative group cursor-pointer"
                  >
                    <img
                      src={cardData.img}
                      className="w-full rounded-lg cursor-pointer "
                      alt=""
                    />
                    <div className="absolute layer transition-all	 top-0 bottom-0 left-0 right-0 opacity-40 flex text-center items-center align-middle  justify-center ">
                      <i className="fa-solid fa-plus opacity-0 group-hover:opacity-100 text-6xl text-white "></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            {}
            <div className="grid grid-cols-1 ">
              <div className="col-span-1">
                <div
                  className={`Model fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50  ${
                    showModel ? "block" : "hidden"
                  }`}
                >
                  {ModelData && (
                    <div className="bg-white w-full max-w-2xl rounded-lg p-10 relative m-4">
                      <div
                        className="absolute right-2 top-2 p-2 text-2xl cursor-pointer"
                        onClick={exit}
                      >
                        <i className="fa-solid fa-x"></i>
                      </div>
                      <div className="header">
                        <h1 className="text-2xl p-5 text-center">{ModelData.title}</h1>
                        <div className="flex justify-center align-baseline items-center text-slate-800">
                          <span className="h-2 rounded-lg w-36 bg-slate-800"></span>
                          <i className="fa-solid fa-star px-3 text-4xl"></i>
                          <span className="h-2 rounded-lg w-36 bg-slate-800"></span>
                        </div>
                      </div>
                      <div>
                        <img
                          src={ModelData.img}
                          className="w-5/6 mx-auto p-5"
                          alt=""
                        />
                        <p className="max-w-8xl mx-auto">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Consectetur animi dicta beatae dolorum odio,
                          nostrum fuga tempora suscipit autem ex, eius dolores
                          ipsa soluta alias quo? Saepe, doloribus! Distinctio,
                          suscipit!
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
