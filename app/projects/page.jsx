"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/AuthProvider'
import UserProfile from '../myprofile/page'





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
    <div className='flex text-[#04031f] h-screen flex-col w-full items-center justify-center bg-gradient-to-r from-[#ffe5c8] to-white'>
         <div className='flex w-[1300px]  mb-5 mt-7 bg-gradient-to-l from-[#ffe5c8] to-white rounded-xl mt-5 items-center justify-center'>
            <Navbar />
        </div>
        <div className='flex w-full items-center justify-center flex-col text-xl '>
            {userData && (<h1 className='font-bold text-xl'>~{userData.name}~ <span className='ml-2'>You made it here!</span></h1>)}
            <h1 className='flex text-[30px]'>Explore my portfolio showcasing diverse full-stack projects,</h1>
            <p className='flext text-lg italic mt-2'>where I have designed and developed seamless web applications, combining robust backend functionality with intuitive frontend</p>
            <p className='flext text-lg italic '>experiences. Each project highlights my expertise in modern frameworks, scalable architectures, and solving real-world challenges.</p>
        </div>
        <div className='grid grid-cols-3 w-[1300px] items-center '>
            <div className='flex items-center border w-[400px] mt-5 ml-4 h-[300px] rounded-xl justify-center'>Grid-1</div>
            <div className='flex items-center border w-[400px] mt-5 ml-4 h-[300px] rounded-xl justify-center'>Grid-1</div>
            <div className='flex items-center border w-[400px] mt-5 ml-4 h-[300px] rounded-xl justify-center'>Grid-1</div>
            <div className='flex items-center border w-[400px] mt-5 ml-4 h-[300px] rounded-xl justify-center'>Grid-1</div>
            <div className='flex items-center border w-[400px] mt-5 ml-4 h-[300px] rounded-xl justify-center'>Grid-1</div>
        </div>
    </div>
  )
}

export default Projects