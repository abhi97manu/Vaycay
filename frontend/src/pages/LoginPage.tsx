import React, { useEffect } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import {LoginService} from '../Services/ApiServices';
import Alert from '../components/layout/Alert';

interface UserCredentials {
  username: string;
  password: string;
}



const LoginPage = () => {


  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [showAlert, setShowAlert] = React.useState<boolean>(false);

  async function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const status = await LoginService(username, password);
    setShowAlert(true)
    console.log(status);
  }

  return (
    <>
    {showAlert && <Alert type = {'error'} message = {'USER NOT FOUND '} timeout = {2000} setShowAlert= {setShowAlert} showAlert = {showAlert}/>}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-4">
  {/* Clean white background for the surrounding area */}

  {/* Refined Glass Card: Less glossy, orange & white mix */}
  <div
    className="
      relative
      w-full
      max-w-md
      overflow-hidden
      rounded-3xl
      border border-white/70 /* Lighter border for less contrast */
      bg-gradient-to-br from-orange-500/20 to-white/10 /* Subtle orange gradient mix */
     
   
      shadow-2xl /* Softer, larger shadow */
      p-8
      transition-all duration-300 ease-in-out
    "
  >
    {/* Removed the harsh Glass Reflection overlay for a flatter look */}

    <div className="relative z-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Hello Admin !!
        </h1>
        <p className="text-gray-600 mt-2">
          Login to continue to your account
        </p>
      </div>

      <form className="space-y-5">
        {/* Input Fields: Styled for the white theme */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            value = {username}
            onChange = {(e) => setUsername(e.target.value)}
            className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3.5 text-gray-900 placeholder-gray-400 outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className='flex justify-between items-center w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3.5 text-gray-900 placeholder-gray-400 outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition'>
            <input
           type =  {showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
            className="w-full bg-gray-50 border-none outline-none placeholder-gray-400"
          />
          {
            showPassword ? <FaRegEye onClick= {()=> setShowPassword(false)}/> : <FaRegEyeSlash onClick= {()=> setShowPassword(true)}/>  
          }
        </div>
        
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" className="accent-orange-600 rounded" />
            Remember me
          </label>

          <a
            href="#"
            className="text-orange-600 hover:text-orange-700 font-medium transition"
          >
            Forgot Password?
          </a>
        </div>

        {/* Primary Button: Solid Orange */}
        <button
          type="submit"
          className="w-full rounded-xl bg-orange-600 text-white font-semibold py-4 hover:bg-orange-700 transition duration-300 shadow-md"
          onClick = {(e)=> HandleSubmit(e)}
        >
          Login
        </button>
      </form>

      <p className="mt-6 text-center text-gray-600">
        Don't have an account?{" "}
        <a
          href="/register"
          className="text-orange-600 font-semibold hover:text-orange-700 transition"
        >
          Sign Up
        </a>
      </p>
    </div>
  </div>
</section>
</>
  )
}

export default LoginPage


