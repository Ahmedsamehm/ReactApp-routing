import React from "react";

export default function About() {

  return (
    <>
      <section className="About py-20">
        <div className="container mx-auto max-w-4xl py-16 ">
        <div className="flex justify-center align-baseline items-center  text-white py-4">
        <span className="h-2 rounded-lg w-36 bg-white "> </span>
        <i class="fa-solid fa-star px-3 text-4xl "></i>
        <span className="h-2 rounded-lg  w-36 bg-white"> </span>
      </div>
          <div className="grid grid-cols-2 mx-auto  text-white text-xl">
            <div className="col-span-1 p-5 ">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-span-1 p-5">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
