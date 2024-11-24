"use client"
import React from 'react'
import Navbar from '../components/Navbar'



const Contact = () => {
    const HandleEmailSends=()=>{
        window.location.href="https://mail.google.com/mail/?view=cm&fs=1&to=felixkiprotich2000@gmail.com&su=Email from your portfolio",
            "_blank", "_blank"
    }

    const handleWhatsApp=()=>{
        window.location.href="https://wa.me/254758364336?text=Hello there.Thanks for reaching out through my portfolio. ", "_blank"
    }

    const handleCall=()=>{
        window.location.href="tel:+254758364336"
    }

  return (
    <div className='flex  w-full items-center justify-center'>
        <div className='flex bg-gradient-to-r  from-[#ffe5c8] to-[#fff1e2] rounded-xl mt-10 flex-col items-center justify-center w-[1500px] '>
            <div className='flex w-[1300px]  bg-gradient-to-l from-[#ffe5c8] to-white rounded-xl mt-5 items-center justify-center'>
                <Navbar />
            </div>
            <div className='flex flex-col w-full items-center justify-center mt-7'>
                <h1 className='flex font-bold text-xl'>You made it here</h1>
                <p className='flex text-sm italic'>Visit our pages to get in contact or make that call.Inshallah!</p>
            </div>

            <div className='grid w-full grid-cols-4 '>
                <div className='flex flex-col items-center  ml-9 w-[300px] bg-white  rounded-lg h-[360px] mt-4  '>
                    <div className='flex gap-9 mt-4 rounded-lg bg-[#ffd0d0] w-[270px] items-center  p-3'>
                

                    </div>
                    <h1 className='font-bold text-lg mt-6'>Chat on WhatsApp</h1>
                    <div className='flex w-full items-center justify-center mt-3'><hr className='w-[270px]'/></div>
                    <p className='mt-6 items-center justify-center text-sm flex w-full'>Chat or call via WhatsApp</p>
                     <p className='items-center justify-center text-sm flex w-full '>+254 758 364 336</p>
                     <button onClick={handleWhatsApp} className='flex text-sm w-[270px] p-2 mt-6 rounded-md items-center justify-center bg-[#ffd0d0]'>Click here to whatsapp</button>
                </div>
                <div className='flex flex-col items-center ml-9 w-[300px] bg-white rounded-lg h-[360px] mt-4 mb-4'>
                     <div className='flex gap-9 rounded-lg bg-[#f6deff]  w-[270px] items-center mt-4 p-3'>
                  
                    </div>
                    <h1 className='font-bold text-lg mt-6'>Send me an Email</h1>
                    <div className='flex w-full items-center justify-center mt-3'><hr className='w-[270px]'/></div>
                    <p className='mt-6 items-center justify-center text-sm flex w-full'>Reach me through email</p>
                     <p className='items-center justify-center text-sm flex w-full '>Send me an email</p>
                     <button onClick={HandleEmailSends} className='flex text-sm w-[270px] p-2 mt-6 rounded-md items-center justify-center bg-[#f6deff]'>Click to open gmail</button>

                </div>
                <div className='flex flex-col items-center ml-9 w-[300px] bg-white  rounded-lg h-[360px] mt-4 mb-4'>
                     <div className='flex gap-9 rounded-lg bg-[#c9fff2]  w-[270px] items-center mt-4  p-3'>
                  
                    </div>
                    <h1 className='font-bold text-lg mt-6'>View my LinkedIn Profile</h1>
                    <div className='flex w-full items-center justify-center mt-3'><hr className='w-[270px]'/></div>
                    <p className='mt-6 items-center justify-center text-sm flex w-full'>Go check that profile</p>
                     <a href='https://www.linkedin.com/in/kiprotich-felix-b87a11228/'>Kiprotich</a>
                     <button className='flex w-[270px] p-2 mt-6 rounded-md items-center justify-center bg-[#c9fff2] text-sm'><a href='https://www.linkedin.com/in/kiprotich-felix-b87a11228/' target='blank'>Click To load profile </a></button>

                </div>
                <div className='flex flex-col items-center ml-9 w-[300px] bg-white  rounded-lg h-[360px] mt-4 mb-4'>
                     <div className='flex gap-9 rounded-lg bg-[#e3ffd2] mt-4 w-[270px] items-center  p-3'>
                   
                     </div>
                     <h1 className='font-bold text-lg mt-6'>Make that Call</h1>
                     <div className='flex w-full items-center justify-center mt-3'><hr className='w-[270px]'/></div>
                     <p className='mt-6 items-center justify-center text-sm flex w-full'>Let's talk on phone</p>
                     <p className='items-center justify-center text-sm flex w-full '>+254 758 364 336</p>
                     <button onClick={handleCall} className='flex text-sm w-[270px] p-2 mt-6 rounded-md items-center justify-center bg-[#e3ffd2]'>Click here to dial</button>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Contact