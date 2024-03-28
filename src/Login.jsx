import React from 'react'
import img from "./assets/img.png"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='' >
        <div className='bg-black flex items-center justify-between p-3 border-b-4 border-b-[#7c0000]'>
            <div>
                <h1 className='text-white'>Practice fusion</h1>
            </div>
            <Link to="/register">
                <button className='bg-[#7c0000] text-white p-2'>Create your EHR account</button>
            </Link>
        </div>
        <div className='flex justify-center gap-20 pt-10 mb-8'>
            <div className='flex flex-col items-center'>
                <img src={img} alt="" className='w-[500px]'/>
                <button className='bg-[#f36b32] p-2 rounded-lg text-white font-medium w-[150px] mt-6'>Schedule a call</button>
                <p className=' cursor-pointer text-blue-500 pt-3'>Learn more</p>
            </div>
            <div className='bg-[#f5f5f5] flex flex-col py-5 px-10 w-[500px]  gap-4 rounded-lg'>
                <h1 className=' text-[40px]'>Log in to your EHR</h1>
                <div className='flex flex-col gap-3 pt-8'>
                    <label htmlFor="" className=' text-[22px] text-gray-500'>Email</label>
                    <input type="text" name="" id="" placeholder='Enter email' className=' outline-none border border-gray-300 px-2 py-2 rounded-lg'/>
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="" className=' text-[22px] text-gray-500'>Password</label>
                    <input type="text" name="" id="" placeholder='Enter password' className=' outline-none border border-gray-300 px-2 py-2 rounded-lg'/>
                </div>
                <button className='bg-[#7c0000] p-2 rounded-lg text-white font-medium mt-7'>Login</button>
                <p className=' mt-3 text-center'>Dont have an account ? <Link to="/register" className='text-blue-700'>Create account</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login