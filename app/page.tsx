
"use client";
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useAuth } from './context/AuthProvider';






const page = () => {
  const {setUser}=useAuth()
  console.log("this is a client component!")
  const router=useRouter()

  const [data, setData]=useState({
    name:"",
    email:"",
    password:""
  })

  const HandleChange =(e)=>{
    const {name,value}=e.target
    setData({
      ...data, [name]:value
    })
  
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
 

  fetch("http://127.0.0.1:5555/users/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(data)
  })
  .then((response)=>{
    if(!response.ok){
      throw new Error("failed to create profile")
    }
    return response.json()
  })
  .then((data)=>{
    console.log("new user.................", data)
    sessionStorage.setItem("token", data.access_token)
    sessionStorage.setItem("id", data.id)
    setUser({id:data.id, token:data.access_token })
    router.push(`/homepage`)

  })
}
  
  return (
    <div className='flex flex-col items-center justify-center gap-5 lg:gap-0  h-screen'>
    
      <div className='flex  w-[1500px] bg-gradient-to-l rounded-xl  from-[#ffe5c8] to-white  h-[100px] items-center justify-between shadow-sm'>
       <Link href='/'><img src='./next.svg' alt='logo' className='w-[80px] h-[80px] ml-5'/></Link> 
       <Link href="/login"><button className='flex items-center justify-center lg:text-white p-2  lg:w-[130px] h-[40px] lg:bg-gradient-to-l font-bold from-[#f79b32] to-[#ffe5c8] rounded-md mr-1 lg:mr-5'>Login</button></Link> 
      </div>
      <div className='flex bg-gradient-to-r from-[#ffe5c8] to-white w-[1500px] h-[700px] rounded-xl mt-10 flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-5'>
        <div>
          <img src='/homePagePhoto.png' alt='homepage photo'/>
        </div>
        <div className='flex w-full items-center h-full justify-center'>
      
      <div className=' flex items-center sm:mr-0 md:mr-6 lg:h-[650px] bg-gradient-to-r from-[#fff6eb] to-white w-[1500px]  lg:rounded-md lg:shadow-md lg:w-[500px] lg:border  gap-6 lg:gap-7 justify-center flex-col'>
      <Link href='/'><img src='/next.svg' alt='portfolio logo' className='w-[80px] h-[80px]'/></Link>
       <h1 className='text-xl lg:text-xl md:text-[30px]'> Hey There! Glad to see you.</h1>
       <hr className='flex w-[400px]'/>
       <h2 className='text-md md:text-lg lg:text-md'>Login or sign up so I can salute you better</h2>
       <form className='flex flex-col lg:gap-2 items-center justify-center '>
       <input value={data.name} onChange={ HandleChange} type='text' name='name' placeholder='Enter your username' className='flex mt-3 p-2 md:p-4 lg:p-2 rounded-md w-[350px] md:w-[700px] lg:w-[400px] pl-4 outline-none bg-inherit border -black'/>
        <input value={data.email} onChange={ HandleChange} type='text' name='email' placeholder='Enter your email' className='flex p-2 mt-3 rounded-md md:p-4 lg:p-2 w-[350px] md:w-[700px] lg:w-[400px] pl-4 outline-none bg-inherit border -black'/>
        <input value={data.password} onChange={ HandleChange} type='password' name='password' placeholder='Enter your password' className='flex mt-3 p-2 rounded-md md:p-4 lg:p-2 w-[350px] md:w-[700px] lg:w-[400px] pl-4 outline-none bg-inherit border -black'/>
        <button onClick={handleSubmit} className='mt-3 lg:w-[400px] w-[350px] md:w-[700px] p-2 md:p-4 lg:p-2 bg-gradient-to-l font-bold from-[#f79b32] to-[#ffe5c8] text-white rounded-md hover:bg-gradient-to-l hover:bg-from-[#f79b32] hover:bg-to-[#ffe5c8]'>Sign Up</button>
       </form>
      </div>
      </div>
      </div>
      
      
    </div>
  )
}

export default page