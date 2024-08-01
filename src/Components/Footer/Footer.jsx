import React from 'react'

export default function Footer() {
  return (
      <footer className='FooterBg p-10'>
      <div className='container mx-auto max-w-8xl text-white p-20'>
        <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-3  text-center '>
          <div className="col-span-1 mx-auto">
            <div className='p-5 space-y-4'>
              <h1 className='text-3xl'>LOCATION</h1>
              <p className='font-bold'>2215 John Daniel Drive Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-span-1 mx-auto ">
            <div className='p-5 space-y-4'>
              <h1 className='text-3xl'>AROUND THE WEB</h1>
              <ul className='flex gap-6'>
                <li className='bg-transparent border hover:bg-white hover:text-black transition-all rounded-full px-4 py-3 cursor-pointer '><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                <li className='bg-transparent border hover:bg-white hover:text-black transition-all rounded-full px-4 py-3 cursor-pointer '><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                <li className='bg-transparent border hover:bg-white hover:text-black transition-all rounded-full px-4 py-3 cursor-pointer '><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                <li className='bg-transparent border hover:bg-white hover:text-black transition-all rounded-full px-4 py-3 cursor-pointer '><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
              </ul>
       
            </div>
          </div>
          <div className="col-span-1 mx-auto ">
            <div className='p-5 space-y-4 '>
              <h1 className='text-3xl'>ABOUT FREELANCER</h1>
              <p className='font-bold'>Freelance is a free to use, MIT licensed Bootstrap theme created by Hamza Nouh</p>
            </div>
          </div>

        </div>
        
        </div>
      </footer>
  
  )
}
