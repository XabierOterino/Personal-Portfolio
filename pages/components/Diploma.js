import React from 'react'
import Image from 'next/image'
function Diploma(props) {
  return (
    <div className=' flex diploma mb-8 w-full cursor-pointer py-4 px-8  rounded-md'>
        <Image 
            src="/moralis.png"
            className='rounded-full' height={160} width={160}  />
        <div className='mx-8'>
            <h1 className='font-bold text-xl'>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default Diploma