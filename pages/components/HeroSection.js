import React from 'react'
import Image from 'next/image'
function HeroSection() {
  return (
    <section className=' flex flex-wrap justify-between' >
        <div className='my-8 mx-16'>
            <h1 className='text-6xl font-bold'>Web3 is happening </h1>
            <h1 className='text-6xl font-bold'>now</h1>
        </div>
       <div className={'image-container mx-32'}>
            <Image 
                className= {'image '}
                
                width={300}
                height={300}
                src="/heroIcon.png" 
                />
        </div>
    </section>
  )
}

export default HeroSection