"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthProvider';






const Login
 = () => {

  const {setUser}=useAuth()
  const router=useRouter()
 
  const[userData, setUserData]=useState({
    email:"",
    password:""
  })
  const handleChange =(e)=>{
    const {name, value}=e.target
    setUserData({
      ...userData, [name]:value
    })

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    fetch(`http://127.0.0.1:5555/user/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(userData)
    })
    .then((response)=>{
      if(!response.ok){
        throw new Error("Error trying to log you in")

      }
      return response.json()
    })
    .then((data)=>{
      console.log("logged in user data......................", data.id)
      sessionStorage.setItem("token", data.access_token)
      sessionStorage.setItem("id", data.id)
      setUser({id:data.id, token:data.access_token })
      router.push(`/homepage`)
    })
    .catch(error=>{
      console.error("error while logging in", error)
    })
  }

  useEffect(()=>{
    const token=sessionStorage.getItem("token")
    if(token){
      router.push("/homepage")
    }
  },[setUser])
  return (
    <div className='flex flex-col bg-gradient-to-l rounded-xl  from-[#ffe5c8] to-white  h-screen w-full items-center justify-center'>
     
      <div className='flex mt-6 lg:mt-0 flex-col shadow-sm items-center justify-center w-full text-center'>
        <h1 className='text-xl md:text-[40px] lg:text-[30px] md:mt-[200px] lg:mt-9 mt-9'>Welcome Back!</h1>
        <h1 className='text-sm md:text-lg md:mt-4'>Fill the form to sign you in for better salutation. Inshallah</h1>
      </div>
      <div className='lg:grid  flex flex-col  lg:grid-cols-2 w-full lg:h-full mt-5 gap-7 items-center justify-center'>
        <div className='hidden lg:flex w-full h-full items-center justify-center'>
          <img src='/LoginpagePicture.png' alt='login picture' className='w-auto h-[750px]'/>
        </div>
        <div className='flex w-full md:h-screen  lg:h-full items-center justify-center'>
          <div className='flex flex-col w-[500px] bg-gradient-to-l rounded-xl  from-[#fff2e3] to-white  md:w-full lg:w-[600px] h-[700px] lg:h-[700px] md:h-full items-center   lg:shadow-md'>
           <Link href='/'> <img src='/next.svg' alt='portfolio logo' className='w-[80px] h-[80px]'/></Link>
            <p className='text-md lg:text-xl md:text-[25px]'>Enter your details</p>
            <hr className='flex w-[530px] mt-3'/>
            <img src='/tom.png' alt='cat-picture' className=' w-auto h-[300px] lg:h-[350px] md:h-[400px]'/>
            <form className='mt-7 gap-6 flex flex-col'>
              <input onChange={handleChange} value={userData.email} type='text' name='email' placeholder='Enter your email address' className='flex p-2 w-[350px] lg:w-[450px] md:w-[600px] md:p-4 lg:p-2 items-center text-sm outline-none border rounded-md'/>
              <input onChange={handleChange} value={userData.password} type='password' name='password' placeholder='Enter your password' className='flex p-2 w-[350px] lg:w-[450px] md:w-[600px] md:p-4 lg:p-2 items-center text-sm outline-none border rounded-md'/>
              <button onClick={handleSubmit} type='submit' className='flex w-[350px] lg:w-[450px] items-center justify-center text-white border md:w-[600px] md:p-4 lg:p-2 rounded-md bg-gradient-to-l from-[#f79b32] to-[#ffe5c8] p-2'>Log in</button>
            </form>

          </div>

        </div>
      </div>
        
    </div>
  )
}

export default Login
