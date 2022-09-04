
import Image from 'next/image'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Diploma from './components/Diploma'
import { useState } from 'react'
export default function Home() {
  const [showAll , setShowAll] = useState(false)
  const style={
    section: " py-8 px-16 w-full",
    title:"mt-16 text-4xl font-bold",
    subtitle:"mt-4 text-xl font-semibold",
    details : 'text-theme mb-16 font-semibold mt-4'
  }
  return (
    <>
      <Header/>
      <HeroSection/>
      <div className={style.section} id='eduaction'>
        <h2 className={style.title}>Education</h2>
        <h3 className={style.subtitle}>Certified my Moralis Academy</h3>
        <p className={style.details}>I had the pleasure to be educated at the most well known academy in the industry : Moralis.
         Funded by blockchain experts such as <a href='https://twitter.com/IvanOnTech' target="_blank"  className='underline cursor-pointer'>Ivan on Tech</a>. I have a deep understanding of how blockchain and EVM work as a window to a
         more transparent, decentralised and fair world. Overall , I have also done my own research as a self-taught developer to achieve a futher more deep understanding. Here some of my most important diplomas:</p>
        <Diploma title="Solidity 101" text="I can develop efficient , secure and functional smart contract using good practices" />
        <Diploma title="Solidity 101" text="I can develop efficient , secure and functional smart contract using good practices" />
        <Diploma title="Solidity 101" text="I can develop efficient , secure and functional smart contract using good practices" />
        {showAll && <> 
          <Diploma />
          <Diploma />
          <Diploma />
          <Diploma />
          <Diploma />
          <Diploma />
        </>}
        {
          !showAll?<button onClick={()=>setShowAll(true)}>Show More</button>
          : <button onClick={()=>setShowAll(false)}>Hide</button>
        }
        
      </div>

      <div className={style.section} id='work'>
        <h2 className={style.title}>Work</h2>
        <h3 className={style.subtitle}>Built full stack projects</h3>
        <p className={style.details}>dsfhjksdhfjksdh</p>
      </div>
      <div className={style.section} id='values'>
        <h2 className={style.title}>My values as a developer</h2>
        <h3 className={style.subtitle}></h3>
        <p className={style.details}></p>
      </div>
      <div className={style.section}>
        <h1 className={style.title}>Hire me</h1>

      </div>
    </>
  )
}
