/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import {FaChevronRight , FaChevronLeft} from 'react-icons/fa'

export default function Why_customer() {
    const logos =[
        '/microsoft.jpg',
        '/dropbox.png',
        '/amazon.jpg',
        '/google-logo.png',
    ]

    const duplicatedImages =[];
    while(duplicatedImages.length <10){
        duplicatedImages.push(...logos);
    }

    
  return (
    <div className='text-center py-24 container mx-auto px-6'>
      <h2 className='lg:text-5xl text-2xl font-semibold '>Why Customer Love Us</h2>
      <p className='text-2xl mt-4 font-light'>What our customers say about us</p>
      <div className='flex items-center justify-center mt-16 pb-12 gap-x-2 lg:w-1/2 mx-auto'>
        <FaChevronLeft size={30}/>
        <p className='text-2xl leading-10'>
            Each day, I'm inspired by my colleagues to drive innovation that accomplishes
            this. Jobline an environment of trust and support where I can drive customer success.
         </p>
         <FaChevronRight size={30} />
      </div>
      <p className='text-3xl font-semibold'>Sam Curran</p>
      <p className='text-xl pt-4'>Syspersoft</p>
      <div className='flex items-center lg:gap-16 gap-3 overflow-hidden my-24'>
        {duplicatedImages.slice(0,10).map((image , index) =>(
          <img 
          key={index} 
          src={image} 
          alt='' 
          className='w-40 h-14 object-contain'
          />
        ))}
      </div>
    </div>
  ) 
}
