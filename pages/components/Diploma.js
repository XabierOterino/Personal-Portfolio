import React from 'react'

function Diploma(props) {
  return (
    <a href={props.url} target="blank">
        <div className=' flex border bg-black border-secondary hover:bg-secondary/60 diploma mb-8 w-full cursor-pointer py-2 px-4 md:py-4 md:px-8  rounded-md'>
            <div className='w-2/12' >
            <img 
                src="/moralis.png"
                className='hidden md:flex grow ' />
            </div>
            <div className='mx-8 flex-col w-full md:w-10/12 flex justify-center'>
                <h1 className='font-bold text-xl'>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    </a>
  )
}

export default Diploma