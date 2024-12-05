"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/AuthProvider'
import UserProfile from '../myprofile/page'
import Link from 'next/link'






const Projects = () => {
    const {user}=useAuth()
    const [userData, setUserData]=useState(null)
    
    useEffect(()=>{
        if(user && user.userId){
            fetch(`http://127.0.0.1:5555/user/${user.userId}`,{
                headers:{
                    "Authorization":`Bearer ${user.token}`
                }

            })
            .then((response)=>{
                if(!response.ok){
                    throw new Error("Error while fetching user")
                }
                return response.json()
            })
            .then((data)=>{
                console.log("fetched user profile data..............", data)
                setUserData(data)
            })
            .catch(error=>{console.error("Error while getting user profile", error)})
        }
    },[user])
  return (
    <div className='flex text-[#04031f]  flex-col w-full items-center justify-center bg-gradient-to-r from-[#ffe5c8] to-white'>
         <div className='flex fixed top-0 z-50 w-full bg-gradient-to-l from-[#ffe5c8] to-white  items-center justify-center shadow-sm'>
            <Navbar />
        </div>
        <div className='flex mt-[130px] w-full items-center justify-center flex-col text-xl '>
            {userData && (<h1 className='font-bold text-xl'>~{userData.name}~ <span className='ml-2'>You made it here!</span></h1>)}
            <h1 className='flex italic text-[21px] font-bold'>Explore my portfolio showcasing diverse full-stack projects,</h1>
            <p className='flex  text-sm  mt-2'>where I have designed and developed seamless web applications, combining robust backend functionality with intuitive frontend</p>
            <p className='flex  text-sm  '>experiences. Each project highlights my expertise in modern frameworks, scalable architectures, and solving real-world challenges.</p>
        </div>
        <div className='flex flex-col w-[1300px] items-center '>
            <div className='grid grid-cols-3 gap-4 hover:shadow-xl items-center flex-col border shadow-md w-[1300px] mt-5 ml-4 h-[350px] rounded-xl '>
               <div className=' h-full items-center ml-6 justify-center flex'><img className='flex h-[250px] w-[500px] object-cover  bg-[#bebebe] p-2  rounded-xl' src='/cloudstore.png'/></div> 
               <div className='col-span-2 flex w-full flex-col'>
                <h1 className='italic flex w-full items-center justify-center font-bold text-xl mt-2'>CloudStore(Google drive clone)</h1>
                <p className='flex p-2  text-center text-sm'>With a group of three members, We cpllaborated and created a google drive clone, for personalized data storage. 
                    Being a fullstack software engineer, I helped integrate a sleek frontend with a flask server, using RESTful APIs.</p>
                <h1 className='font-bold text-xl flex w-full items-center justify-center  '>Features</h1>
                <p className='text-center flex w-full items-center justify-center  text-sm p-2'>Mobile responsive, RESTful Backend integration, side and top Navbar, Dark Mode, Cloudinary Integration, File sharing </p>
                <div className='flex w-full gap-5 mt-5 items-center justify-center'>
                <Link href="https://github.com/mujahidina/CloudStore/tree/final" target='_blank'> <button className='w-[380px] items-center flex justify-center bg-gradient-to-l from-[#f79b32] to-[#ffe5c8] rounded-md mb-4  p-3'>Check out GitHub repo</button></Link>
               <Link href="https://cloud-store-54gn.vercel.app/" target='_blank'> <button className='w-[380px] items-center flex justify-center bg-gradient-to-r from-[#f79b32] to-[#ffe5c8] rounded-md mb-4  p-3'>View the application</button></Link>
               </div>
               </div>
            </div>

            <div className='grid grid-cols-3 gap-4 hover:shadow-xl items-center flex-col border shadow-md w-[1300px] mt-5 ml-4 h-[350px] rounded-xl '>
               <div className=' h-full items-center ml-6 justify-center flex'><img className='flex h-[250px] w-[500px] object-cover  bg-[#bebebe] p-2  rounded-xl' src='/portfolio website.png'/></div> 
               <div className='col-span-2 flex w-full flex-col'>
                <h1 className='italic flex w-full items-center justify-center font-bold text-xl mt-2'>Personal Portfolio</h1>
                <p className='flex p-2  text-center text-sm'>This was my first personal portfilo, built on React.js. The downsides of it was that it had only the client side. However after understanding the full web infrastructure,
                     I saw the need to create a more sleek portfolio, The one we are riding on today!</p>
                <h1 className='font-bold text-xl flex w-full items-center justify-center  '>Features</h1>
                <p className='text-center flex w-full items-center justify-center  text-sm p-2'>Mobile responsive, Dashboard with Chart Js components, side and top Navbar</p>
                <div className='flex w-full gap-5 mt-5 items-center justify-center'>
                <Link href="https://github.com/Tech-goodat/Good_Portfolio" target='_blank'> <button className='w-[380px] items-center flex justify-center bg-gradient-to-l from-[#f79b32] to-[#ffe5c8] rounded-md mb-4  p-3'>View GitHub repo</button></Link>
               <Link href="https://good-portfolio-m0816m8st-tech-goodats-projects.vercel.app/" target='_blank'> <button className='w-[380px] items-center flex justify-center bg-gradient-to-r from-[#f79b32] to-[#ffe5c8] rounded-md mb-4  p-3'>Check it out</button></Link>
               </div>
               </div>
            </div>

            <div className='grid grid-cols-3 gap-4 hover:shadow-xl items-center flex-col border shadow-md w-[1300px] mt-5 ml-4 h-[350px] rounded-xl '>
               <div className=' h-full items-center ml-6 justify-center flex'><img className='flex h-[250px] p-2 w-[500px] object-cover  bg-[#bebebe]  rounded-xl' src='/advicer.png'/></div> 
               <div className='col-span-2 flex w-full flex-col'>
                <h1 className='italic flex w-full items-center justify-center font-bold text-xl mt-2'>Snowflake's Advicer</h1>
                <p className='flex p-2  text-center text-sm'>Snowflake's Advicer is an app designed to give users random advices, which could change the perspective of what they feel. 
                    Incase you feel fucked up, you visit the app and it gives you hilarious advices that elevates good feelings within you.

                </p>
                <h1 className='font-bold text-xl flex w-full items-center justify-center  '>Features</h1>
                <p className='text-center flex w-full items-center justify-center  text-sm p-2'>Mobile responsive, External API integration, seameless response from the API</p>
                <div className='flex w-full gap-5 mt-5 items-center justify-center'>
                <Link href="https://github.com/Tech-goodat/advice-app" target='_blank'> <button className='w-[380px] items-center flex justify-center bg-gradient-to-l from-[#f79b32] to-[#ffe5c8] rounded-md mb-4  p-3'>View GitHub repo</button></Link>
               <Link href="https://advice-app-ebon.vercel.app/" target='_blank'> <button className='w-[380px] items-center flex justify-center bg-gradient-to-r from-[#f79b32] to-[#ffe5c8] rounded-md mb-4  p-3'>Get some advice online!</button></Link>
               </div>
               </div>
            </div>
           
         
        </div>
    </div>
  )
}

export default Projects