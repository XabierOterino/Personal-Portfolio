import React from 'react'
import Image from 'next/image'
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
function HeroSection() {
  return (
    <>
      <section className=' flex font-baby flex-wrap justify-between' >
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
      <footer className='w-full flex justify-evenly bg-secondary/40 flex-wrap'>
          <a><div><EmailIcon className='mr-2' />xabierblockchain@gmail.com</div></a>
          <a href="https://twitter.com/mrWojack_eth" target="blank" ><div><TwitterIcon className='mr-2' />@MrWojack_eth</div></a>
          <a href="https://github.com/XabierOterino?tab=repositories" target="blank" ><div><GitHubIcon  className='mr-2'/>XabierOterino</div></a>
          <div></div>
      </footer>
    </>
  )
}

export default HeroSection