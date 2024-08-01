import React from 'react'

export default function ContactMe() {
  return (
    <section className="ContactMe p-16">
    <div className="container mx-auto">
      <h1 className="text-center p-5 text-2xl font-bold">CONTACT ME</h1>
      <div className="flex justify-center align-baseline items-center  text-slate-800 ">
        <span className="h-2 rounded-lg w-36 bg-slate-800 "> </span>
        <i class="fa-solid fa-star px-3 text-4xl "></i>
        <span className="h-2 rounded-lg  w-36 bg-slate-800"> </span>
      </div>
      <div className="gird grid-cols-1 gap-3 px-5 my-5 mx-auto">
        <div className="col-span-1 lg:w-1/2 md:w-5/6  mx-auto">
          <div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                placeholder="Name"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:w-1/2 md:w-5/6  mx-auto">
          <div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                placeholder="Email"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:w-1/2 md:w-5/6  mx-auto">
          <div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                placeholder="PhoneNumber"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:w-1/2 md:w-5/6  mx-auto">
          <div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                placeholder="Message"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="py-5">
          <button  className="border bg-red-500 px-6 rounded-lg text-center py-3 text-white btnSend">Send</button>
          </div>
        </div>

  

      </div>
    </div>
  </section>
  )
}
