import React from 'react'
export default function Stack(props) {
  return (
        <div className='bg-secondary/70 pt-16 '>
          <h1 className='text-body  text-center  mx-8 text-4xl font-bold'>My developer stack : </h1>
          <div className='flex justify-center items-center flex-wrap gap-2  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-16'>
            <img 
              className='h-24 w-24 '
              src='./solidity.svg'/>
            <img 
              className='h-24 w-24 '
              src='./js.png'/>
            <img 
              className='h-24 w-24 '
              src='./hardhat.png'/>
            <img 
              className='h-24 w-24 '
              src='./truffle.png'/>
            <img 
              className='h-24 w-24 '
              src='./moralis.png'/>
            <img 
              className='h-24 w-24 '
              src='./metamask.png'/>
            <img 
              className='h-24 w-24 '
              src='./nextjs.png'/>
            
            <img 
              className='h-24 w-24 '
              src='./tailwind.png'/>
            <img 
              className='h-16 w-36 '
              src='./npm-logo.png'/>

            <img 
              className='h-20 w-24 '
              src='./react.png'/>
            <img 
              className='h-24 w-24 '
              src='./vyper.png'/>
            
          </div>
            
        </div>
        
    
  )
}

