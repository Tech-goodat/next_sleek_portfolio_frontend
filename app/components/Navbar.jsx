"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthProvider'



const Navbar = () => {
const {user}=useAuth()
const [icon, setIcon]=useState("")

if (user && user.userId){
  useEffect(()=>{
    fetch(`http://127.0.0.1:5555/user/${user.userId}`,{
      headers:{
        "Authorization":`Bearer ${user.token}`
      }
    })

    .then((response)=>{
      if(!response.ok){
        throw new Error("error fetching data............")
      }
      return response.json()
    })

    .then((data)=>{
      console.log("this is the navbar profile data....................", data)
      setIcon(data)
    })

    .catch(error=>{console.error("error while fetching data", error)})
  },[user])


}

  return (
    <div className='hidden md:flex p-2 justify-between w-full items-center shadow-sm'>
        <div className='flex  items-center justify-center ml-6'>
        <Link href='/'> <img src='/next.svg' alt='portfolio logo' className='w-[80px] h-[80px]'/></Link>
        </div>
        <div className='flex italic items-center w-full justify-center gap-5 text-sm ml-[50px] '>
            <Link className='hover:bg-gradient-to-r from-[#ffe5c8] to-white p-2 w-[100px] items-center justify-center flex rounded-md  ' href='/homepage'>Home</Link>
            <Link className='hover:bg-gradient-to-r from-[#ffe5c8] to-white p-2 w-[100px] items-center justify-center flex rounded-md  ' href='#'>Services</Link>
            <Link className='hover:bg-gradient-to-r from-[#ffe5c8] to-white p-2 w-[100px] items-center justify-center flex rounded-md  ' href='/contact'>Contact</Link>
            <Link className='hover:bg-gradient-to-r from-[#ffe5c8] to-white p-2 w-[100px] items-center justify-center flex rounded-md  ' href='/testimonials'>Testimonials</Link>
            <Link className='hover:bg-gradient-to-r from-[#ffe5c8] to-white p-2 w-[100px] items-center justify-center flex rounded-md  ' href='/projects'>Projects</Link>
            <Link className='hover:bg-gradient-to-r from-[#ffe5c8] to-white p-2 w-[100px] items-center justify-center flex rounded-md  ' href='/services'>About me</Link>
        </div>
        <div className='mr-9' >
            <div className='flex items-center justify-center w-[70px] h-[70px] rounded-full bg-gray-300  '>
           <Link  className="rounded-full w-full flex items-center justify-center" href='/myprofile'><img src={icon.image_url || '/tom.png'} className='h-[68px] rounded-full w-[68px]'/></Link> 
            </div>
        </div>
    </div>
  )
}

export default Navbar