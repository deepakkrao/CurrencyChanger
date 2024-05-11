import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <div className='bg-blue-300 h-screen flex justify-center items-center font-mono' >
    <div className='relative bg-white  opacity-900 rounded-3xl w-3/4 h-1/2 text-3xl' >

        <div className='  flex flex-col justify-center h-1/2 p-5 mb-4 '>
         
                 <h1 className='text-gray-500'>From</h1>
          {/* inputes */}
          <div className='p-2 flex justify-between'>
                    <input type='number' className='border-none rounded-md w-3/4 h-10 text-black border-white'></input>
                    <p className='text-gray-500 text-sm'>Currency</p>
                    <select></select>
                    </div>
        </div>
        <button className='absolute bg-slate-500 rounded-md text-white top-1/2 left-1/2  translate-x-1/2  translate-y--1/2 p-1 w-24'>Swap</button>
        <div className='flex flex-col justify-center h-1/2 p-5 m-2'>      
                    <h1  className='text-gray-500'>To</h1>
            {/* Inputes */}
                    <div className='p-2 flex justify-between'>
                    <input type='number' className='rounded-md w-3/4 h-10 text-black'></input>
                    <p className='text-gray-500 text-sm'>Currency</p>
                    <select></select>
                    </div>

            
        </div>

    </div>
    </div>
  );
}

export default App
