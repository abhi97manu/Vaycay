import React, { useEffect, useState } from 'react'

interface AlertProps {
  message: string;
  type : 'success' | 'error' | 'info';
  timeout : number;
  setShowAlert : React.Dispatch<React.SetStateAction<boolean>>;
  showAlert : boolean;
}

const Alert = ({type , message, timeout ,setShowAlert,showAlert}: AlertProps) => {

  useEffect(()=>{
      const timer  = setTimeout(() => {
          setShowAlert(false)
      }, timeout);

      return ()=>{
       
        clearInterval(timer)
       
      }

 
  },[])

  if(!showAlert) return null;

  return (
    <div className={`absolute max-w-[20rem]  justify-end flex text-wrap  border-2 px-4 py-3 rounded-md shadow-md right-5 top-8 z-50
    ${type === 'success' ? 'bg-green-100 border-green-500 text-green-700' : ''}
    ${type === 'error' ? 'bg-red-100 border-red-500 text-red-700' : ''}
    ${type === 'info' ? 'bg-blue-100 border-blue-500 text-blue-700' : ''}`}>

        <p>{message}</p>
    </div>
  )
}

export default Alert