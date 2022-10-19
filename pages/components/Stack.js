import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
function Stack(props) {
  return (
        <div className='bg-secondary/70 pt-16 '>
          <h1 className='text-body  text-center  mx-8 text-4xl font-bold'>My developer stack : </h1>
          <div className='flex justify-center flex-wrap gap-2  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-16'>
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
            
          </div>
            
        </div>
        
    
  )
}

export default Stack