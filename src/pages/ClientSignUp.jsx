import React from 'react'// Replace with your actual image path
import { Link } from 'react-router-dom';


function ClientSignUp() {
  return (
    <div className="min-h-screen overflow-hidden py-10 sm:py-0  flex flex-col bg-[#060223] items-center justify-center relative">
    <img src="../ellipse-top.png" className='absolute rotate-27 right-[-25vw] top-[-20vh] sm:right-[-150px] sm:top-[-200px] z-102' alt="" />
    <img src="../ellipse-bottom.png" className='absolute sm:bottom-[-300px] bottom-[-20vh]' alt="" />
    <img src="../JURIDENT.png" className='absolute opacity-0 sm:opacity-[1] left-5' alt="" />
    <img src="../Jurident-Logo-bottom.png" className='absolute opacity-0 sm:opacity-[1] right-5 bottom-5' alt="" />
    <div className="grid grid-cols-3 gap-10 pt-14 items-center justify-center text-black p-4">
        {/* Image container - visible on both screen sizes */}
        <div>
          <img 
            src='../LawyerImage.png' 
            alt="Lawyer" 
            className="" 
          />
        </div>
        
        <div className="w-full col-span-2 max-w-xs p-5 z-101 ">
          <h2 className="text-3xl font-semibold text-[#C99F4A] text-center">Sign Up</h2>
          <p className="text-center text-gray-300 mt-2">
            Are you ready to become a legal eagle? Login to the app and spread your wings in the courtroom.
          </p>

          <h3 className="text-lg font-medium text-[#C99F4A] text-center mt-4">Join as Client</h3>

          <div className="flex justify-center gap-4 mt-4">
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 text-black rounded-lg w-36">
              <i className='fa-brands fa-google'></i> Google
            </button>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-600"></div>
            <p className="px-3 text-gray-400">Or</p>
            <div className="flex-1 border-t border-gray-600"></div>
          </div>

          <form className="space-y-4">
            <input type="text" placeholder="Username" className="w-full p-3 bg-white text-black rounded-lg focus:outline-none" />
            <input type="email" placeholder="Email" className="w-full p-3 bg-white text-black rounded-lg focus:outline-none" />
            <div className="relative">
              <input id='password' type="password" placeholder="Password" className="w-full p-2.5 bg-white text-black rounded-lg focus:outline-none text-sm" />
              <button type="button" onClick={()=>{
                let eye = document.getElementById('password-eye')
                let togglepassword=document.getElementById('password')
                if(togglepassword.type==='password'){
                  togglepassword.type='text'
                  eye.classList.remove('fa-eye')
                  eye.classList.add('fa-eye-slash')
                }else{
                  togglepassword.type='password'
                  eye.classList.add('fa-eye')
                  eye.classList.remove('fa-eye-slash')
                }
              }} className="absolute right-4 top-3 text-gray-400 cursor-pointer"><i id='password-eye' className='fa-solid fa-eye'></i></button>
            </div>
            <div className="flex items-center p-3 bg-white text-black rounded-lg">
              🇮🇳 <span className="ml-2">+91</span>
              <input type="tel" placeholder="Phone Number" className="w-full pl-4 focus:outline-none" />
            </div>
            <Link to="../EmailVerification">
              <button type='button' className="w-full bg-blue-600 p-2.5 rounded-lg text-white font-medium hover:bg-blue-700 text-sm">
              Sign Up
              </button>
            </Link>
          </form>

          <p className="text-center text-gray-400 mt-4">
            Do you have an account? <span className="text-[#C99F4A] cursor-pointer"><Link to="../ClientSignIn">Sign In</Link></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClientSignUp;