
import Image from 'next/image'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Diploma from './components/Diploma'
import { useState } from 'react'
export default function Home() {
  const [showAll , setShowAll] = useState(false)
  const style={
    title:"mt-16 text-4xl font-bold",
    subtitle:"mt-4 text-xl font-semibold"
  }
  return (
    <>
      <Header/>
      <HeroSection/>
      <div className='h-96 py-8 px-16 w-full' id='eduaction'>
        <h2 className={style.title}>Education</h2>
        <h3 className={style.subtitle}>Certified my Moralis Academy</h3>
        <p className='text-theme mb-16 font-semibold mt-4'>I had the pleasure to be educated at the most well known academy in the industry : Moralis.
         Funded by blockchain experts such as <a href='https://twitter.com/IvanOnTech' target="_blank"  className='underline cursor-pointer'>Ivan on Tech</a>. I have a deep understanding of how blockchain and EVM work as a window to a
         more transparent, decentralised and fair world. Overall , I have also done my own research as a self-taught developer to achieve a futher more deep understanding. Here some of my most important diplomas:</p>
        <Diploma title="Solidity 101" text="I can develop efficient , secure and functional smart contract using good practices" />
        <Diploma title="Solidity 101" text="I can develop efficient , secure and functional smart contract using good practices" />
        <Diploma title="Solidity 101" text="I can develop efficient , secure and functional smart contract using good practices" />
        <button>ENSEÑAR TODO</button>
        {showAll && <> 
          <Diploma />
          <Diploma />
          <Diploma />
          <Diploma />
          <Diploma />
          <Diploma />
        </>}
        
      </div>
      <div className='h-96  w-full' id='work'></div>
      <div className='h-96  w-full' id='values'></div>
      
    </>
  )
}
