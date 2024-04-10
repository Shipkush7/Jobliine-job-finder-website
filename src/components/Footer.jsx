 import {FaFacebookF, FaLinkedinIn, FaSlack, FaTwitter } from "react-icons/fa";

 export default function Footer() {
   return (    
   <>
      <div className="bg-black py-20">
         <div className="container mx-auto px-6">
             <h2 className="lg:text-4xl text-white text-center font-semibold">
              Ready For Your Next Hire with Us ?  
            </h2>
             <p className="lg:w-1/2 mx-auto text-white text-center text-xl py-8">
                 Along with conventional advertising & below the line
                activities & organization have come to realize that they need to invest
             </p>
            <div className="flex justify-center my-8">
                 <button className="rounded-full bg-blue-500 text-lg text-white font-bold px-8 
                 py-3 outline-none border-none hover:bg-blue-700">
                 Login to Community
                 </button>
            </div>

            <section className="flex flex-wrap pt-16 justify-between gap-8">
               <div className="flex flex-col justify-between">
                     <span className="flex items-center lg:text-5xl text-3xl">
                        <button className="rounded-full py-1 px-1 text-white bg-blue-500 lg:text-5xl 
                        text-3xl outline-none border-none">
                        Jo
                       </button>
                        <p className="font-semibold leading-tight text-white">bline</p>
                    </span>
                    <p className="text-white text-lg">Call us</p>
                     <p className="text-blue-500 text-lg">(123) 456-7689</p>
                     <p className="text-white text-lg">
                         {" "}
                        90 Fifth Avenue, 3rd Floor <br />
                        San Francisco, CA 1980 <br /> official@jobline.com
                     </p>
                 </div>

                 <div>
                    <h6 className="text-white text-2xl pb-6">Community</h6>
                   <ul className="flex flex-col gap-6 text-lg">
                     <a href="#" className="text-white no-underline hover:text-blue-500">Against Discriminations</a>
                      <a href="#" className="text-white no-underline hover:text-blue-500">Invite Friends</a>
                    <a href="#" className="text-white no-underline hover:text-blue-500">Gift Cards</a>
                   </ul>
                </div>
             
                 <div>
                     <h6 className="text-white text-2xl pb-6">Bookings support</h6>
                    <ul className="flex flex-col gap-6 text-lg">
                        <a href="#" className="text-white no-underline hover:text-blue-500">COVID-19</a>
                        <a href="#" className="text-white no-underline hover:text-blue-500">Help center</a>
                         <a href="#" className="text-white no-underline hover:text-blue-500">Support</a>
                         <a href="#" className="text-white no-underline hover:text-blue-500">Trust & Safety</a>
                     </ul>
                 </div>

                 <div>
                    <h6 className="text-white text-2xl pb-6">About</h6>
                     <ul className="flex flex-col gap-6 text-lg">
                        <a href="#" className="text-white no-underline hover:text-blue-500">How it works</a>
                        <a href="#" className="text-white no-underline hover:text-blue-500">Careers</a>
                        <a href="#" className="text-white no-underline hover:text-blue-500">About us</a>
                        <a href="#" className="text-white no-underline hover:text-blue-500">Mediac</a>
                    </ul>
                  </div>

                  <div>
                    <h6 className="text-white text-2xl pb-6">Become an employee</h6>
                    <ul className="flex flex-col gap-6 text-lg">
                        <a href="#" className="text-white no-underline hover:text-blue-500">Post your job</a>
                        <a href="#" className="text-white no-underline hover:text-blue-500">Business Account</a>
                       <a href="#" className="text-white no-underline hover:text-blue-500">Resource Center</a>
                        <a href="#" className="text-white no-underline hover:text-blue-500">Community</a>
                    </ul>
                 </div>
           </section>
        </div>
     </div>      
      <div className="bg-slate-50 flex flex-col justify-between px-2 py-3 gap-2 sm:flex-row">
       <p className="text-gray-500 text-lg">All rights reserved. Shipra</p>
       <span className="flex justify-start text-gray-500 gap-4 pr-[20px]">
        <FaFacebookF className=" hover:text-gray-800" size={30}/>
        <FaTwitter    className=' hover:text-gray-800' size={30}/>
        <FaLinkedinIn className=' hover:text-gray-800'  size={30}/>
         <FaSlack     className=' hover:text-gray-800' size={30}/>  
       </span> 
      </div>
</>
   
  );
 }
