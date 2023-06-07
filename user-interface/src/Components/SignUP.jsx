import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios'
import {baseUrl} from '../Axiox'

export default function SignUP() {


const [message,setMessage]=useState(null)

const navigate=useNavigate()

const generateMessage=(msg)=>{

  setMessage(msg)

  setTimeout(() => {
    setMessage(null)
  }, 2000);

}
  const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = async (data) => {
          try {
       const info =await axios.post(`${baseUrl}/user/signup`,data)
       console.log(info.data);
       if(info.data.user){
      navigate('/home')
       }else{
        generateMessage("Email already registered")
      } 
    }
    catch (err) {
      console.log(err);
      generateMessage("Something went wrong")
    }
      };
  return (
    <div className='bg-blue-200'>

    <div className="min-h-screen  flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        {message &&
        
     ( <div className=' flex justify-center items-center text-red-400'>
           {message}
      </div>)
        }

      <h1 className="text-3xl font-semibold mb-6">Register</h1>
      <form 
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input 
          
          type="text" id="name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          name="name"
          placeholder="Enter name"
          {...register("name", {
            required: "Name is required.",
            minLength: {
              value: 3,
              message: "Name should be at-least 3 characters.",
            },
          })}
          />
           {errors.name && (
                <p style={{ color: "red" }}>{errors.name.message}</p>
              )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input    id="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          
          type="text"
                name="email"
                placeholder="Enter  email"
                {...register("email", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                })}
              />

              {errors.email && errors.email.type === "required" && (
                <p style={{ color: "red" }}>Email is required.</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p style={{ color: "red" }}>Email is not valid.</p>
              )}


        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
          <input   type="password" id="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
           name="password"
           placeholder="Enter password"
           {...register("password", {
             required: "Password is required.",
             minLength: {
               value: 6,
               message: "Password should be at-least  characters.",
             },
           })}
         />
         {errors.password && (
           <p style={{ color: "red" }}>{errors.password.message}</p>
         )}


        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Register</button>
      </form>
      <div className='mt-1'>Already registered ?
      <Link to={"/"}>
       <span className='text-blue-700 cursor-pointer	'>Log in</span>
      </Link>
        </div>
    </div>
  </div>
    </div>
  )
}
