
"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/AuthProvider'




const Services = () => {
    const [profile, setProfile]=useState("")
    const {user}=useAuth()
    console.log("Jared wants to know if thisis a server or a client component.......")
    console.log("what component type is this...............!")
const HandleDownloadResume=()=>{
    window.open("http://127.0.0.1:5555/cert", "_blank")
}

useEffect(()=>{
    if(user && user.userId){
        fetch(`http://127.0.0.1:5555/user/${user.userId}`,{
            headers:{"Authorization":`Bearer ${user.token}`}
        })
        .then((response)=>{
            if(!response.ok){
                throw new Error("Error while fetching user profile")
            }
            return response.json()
        })
        .then((data)=>{
            console.log("fetched user profile...............",data)
            setProfile(data)

        })
        .catch(error=>{console.error("Error wile fetching data", error)})
    }
},[user])

  return (
    <div className='flex text-[#04031f] h-screen flex-col w-full items-center justify-center bg-gradient-to-r from-[#ffe5c8] to-white '>
        
        <div className='flex w-[1300px]  mb-[100px] bg-gradient-to-l from-[#ffe5c8] to-white rounded-xl mt-5 items-center justify-center'>
            <Navbar />
        </div>

        <div className='grid  mb-[100px] grid-cols-2 items-center justify-center gap-5'>
            <div className="flex ml-[320px]  flex-col items-center w-full">
               <h1 className='flex w-full font-bold text-[45px] '>My Awesome</h1>
               <h1 className='flex w-full font-bold text-[45px] text-[#ff7113]'>Services</h1>
               <p className='text-sm  mt-4 w-full italic'>As a highly skilled Software Engineer, I excel in Systems and Software Development, specializing in</p>
               <p className='flex text-sm  w-full italic'>React.js, Next.js, TailwindCSS, and backend development using Python-Flask and Django. I create</p>
               <p className='flex text-sm italic  w-full'>industry-level, mobile-responsive, and scalable applications.</p>
               <p className='flex text-sm italic mt-5 w-full'>With meticulous attention to detail, I aim to ensure optimal performance and exceptional user</p>
               <p className='flex text-sm italic  w-full'>experience. My expertise lies in crafting dynamic, visually appealing, and robust solutions that</p>
               <p className='flex text-sm italic w-full'>exceed expectations. 😇</p>
             
                <div className='flex w-full'>
               <button onClick={HandleDownloadResume} className='flex items-center p-3 justify-center  w-[200px] bg-gradient-to-l from-[#ffa569] to-[#ffe5c8] mt-9 rounded-md'>Hire CV</button>
               </div>
            </div>
            <div className="flex w-full items-center justify-center">
            <div className='flex flex-col  gap-2 items-center mr-[200px] w-[500px] h-[600px] bg-[#fdf1e4] rounded-lg shadow-md'>
                <div className='grid grid-cols-4 items-center w-[450px] bg-white rounded-lg h-[360px] mt-4 mb-4 '>
                    <div className='flex col-span-1 items-center justify-center '><img src={profile.image_url || '/tom.png'} className='h-auto w-[70px] rounded-full bg-gray-300 p-1  '/></div>
                    <div className='col-span-3 p-2 flex flex-col'>
                        <h1 className='font-bold text-lg'>Backend Engineer</h1>
                        <p className='flex text-sm italic p-0.5'>Expertise in Python frameworks like Flask and Django to develop robust and scalable server-side solutions. Skilled in designing RESTful APIs, managing databases, and ensuring seamless integration between backend services and frontend systems.</p>
                       
                    </div>
                </div>
                <div className='grid grid-cols-4 items-center w-[450px] bg-white rounded-lg h-[360px] mt-1 mb-4 '>
                    <div className='flex col-span-1 items-center justify-center '><img src={profile.image_url || '/tom.png'} className='h-auto w-[70px] rounded-full bg-gray-300 p-1  '/></div>
                    <div className='col-span-3 flex p-2 flex-col'>
                        <h1 className='font-bold text-lg'>Frontend Engineer</h1>
                        <p className='flex text-sm italic p-0.5'> Proficient in React.js, Next.js, and TailwindCSS to build modern, responsive, and user-friendly interfaces. Focused on creating dynamic, high-performance web applications that deliver exceptional user experiences.</p>
                       
                    </div>
                </div>
                <div className='grid grid-cols-4 items-center w-[450px] bg-white rounded-lg h-[360px] mt-1 mb-4 '>
                    <div className='flex col-span-1 items-center justify-center '><img src={profile.image_url || '/tom.png'} className='h-auto w-[70px] rounded-full bg-gray-300 p-1  '/></div>
                    <div className='col-span-3 flex p-2 flex-col'>
                        <h1 className='font-bold text-lg'>DevOps Engineer</h1>
                        <p className='flex text-sm italic p-0.5'>Skilled in designing and managing CI/CD pipelines for efficient code integration and deployment. Proficient in Git/GitHub for version control, Linux for server management, and deploying secure, scalable applications with automation and reliability.</p>
                        
                    </div>
                </div>

            </div>
            </div>

        </div>
        
    </div>
  )
}

export default Services