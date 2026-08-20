import React, { useEffect, useState } from 'react'

interface AlertProps {
 type : "error" | "warning" | "passed",
  message : string,
  timeout : number

}

const Alert = ({ alert }: { alert: AlertProps }) => {



  const [showAlert,setShowAlert] = React.useState<boolean>(true);

  
   useEffect(()=>{
     
     
      setShowAlert(true)

      const timer  = setTimeout(() => {
         setShowAlert(false)

      }, alert.timeout);

      return ()=>{
      
        clearTimeout(timer)
       
      }

  },[alert])

 
   if(!showAlert ) return null;

  return (


   <div className={`absolute max-w-[20rem] justify-end flex text-wrap border-2 px-4 py-3 rounded-md shadow-md right-5 top-8 z-50
    ${alert.type === 'passed' ? 'bg-green-100 border-green-500 text-green-700' : ''}
    ${alert.type === 'error' ? 'bg-red-100 border-red-500 text-red-700' : ''}
    ${alert.type === 'warning' ? 'bg-blue-100 border-blue-500 text-blue-700' : ''}`}>

        <p>{alert.message}</p>
    </div>
  )
}

export default Alert