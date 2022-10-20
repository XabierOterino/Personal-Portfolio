import React from 'react'

export default function Project(props) {
  return (
    <a href={props.url} target="blank">
        <div className='h-96 bg-black mt-4 card cursor-pointer w-96 border border-secondary/20 rounded-md '>
            <img 
                className='w-full h-56 border-none rounded-t-md'
                src={props.image} />
            <div className='  px-8 py-4'>
                <h1 className='font-bold text-xl mb-4'>{props.name}</h1>
                <p className='font semibold text-secondary/50'>{props.description}</p>
            </div>
            <div className='content w-full h-56'></div>
        </div>
    </a>
  )
}
