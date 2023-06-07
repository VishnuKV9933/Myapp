import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link,useNavigate } from 'react-router-dom';

function Signin() {
   
const [message,setMessage]=useState(null)
const navigate =useNavigate()
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

     
            const info =await axios.post('http://localhost:4000/api/user/changepassword',data)

            if(!info.data.user){
                generateMessage("Email Not Registered ")
            }else{
                generateMessage("Password changed Successfully ")
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

      <h1 className="text-3xl font-semibold mb-6">Change Password</h1>
      <form 
        onSubmit={handleSubmit(onSubmit)}
      >

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Ente your Email</label>
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
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">New Password</label>
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
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Log In</button>
      </form>
  
      <Link to={"/"}>
       <span className='text-blue-700 cursor-pointer	'>Back to Sign in</span>
      </Link>

    </div>
  </div>
    </div>
  )
}

export default Signin
