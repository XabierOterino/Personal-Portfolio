
import Image from 'next/image'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Diploma from './components/Diploma'
import Project from './components/Project'
import Stack from './components/Stack'
import Hireme from './components/Hireme'
import Footer from './components/Footer'
import { useState } from 'react'
export default function Home() {
  const [showAll , setShowAll] = useState(false)


  const style={
    section: " py-8 px-16 w-full",
    title:"mt-16 text-4xl font-bold",
    subtitle:"mt-4 text-xl font-semibold",
    details : 'text-secondary/50 mb-16 font-semibold mt-4'
  }
  return (
    <>
     
      <Header/>
      <HeroSection/>
      <div className={style.section} id='values'>
        <h2 className={style.title}>About me</h2>
        <h3 className='mt-16 text-xl leading-9 font-semibold'>
        My name is Xabier Oterino and I&apos;m a self taught blockchain developer.&nbsp; As a blockchain passionate, I believe in a more decentralised, secure,
        trustless , censorship-free world. I got into the crypto world in 2020 as an investor, interested by its big profits, but
        after I really understood what really blockchain was and its value in 2021 decided to invest in myself to become a developer and contribute to the growth.  
        Learned to program was faster for me since I had a little java background. In 2022 I joined Moralis Academy and completed had a great experience and improvement. After getting almost all the certificates I started to spend countless hours impoving my Solidity , Javascript 
        and frontend skills, built tons of projects on my own. Now I am ready to offer my knwoledge and skills to contribute to this
        incredible industry. I&apos;m currently just starting off my own open source <a href="https://web-demo-kohl.vercel.app/" target="_blank" className='underline cursor-pointer'>project.</a>

        </h3>
      </div>

      <div className={style.section} id='work'>
        <h2 className={style.title}>Work</h2>
        <div className='flex justify-center flex-wrap gap-2  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-16'>

          <Project 
          url="https://github.com/XabierOterino/Simple-Stablecoin"
          image="solidity.png" 
          name="Decentralised Stablecoin" 
          description="Fully working decentralised stablecoin backed by ETH and pegged to USD using Chainlink price oracles."/>

          <Project 
          url="https://github.com/XabierOterino/Flashloans"
          image="solidity.png" 
          name="Flashloans" 
          description="Simple Flashloan app using the OpenZeppelin standards."/>

          <Project 
          url="https://github.com/XabierOterino/Multisig-Wallet/blob/main/Multisig-Wallet.sol"
          image="solidity.png" 
          name="Multisig Wallet" 
          description="ETH multisig wallet built in a smart contract."/>
        
          <Project 
          url="https://github.com/XabierOterino/Orderbook-Dex"
          image="solidity.png" 
          name="Orderbook DEX" 
          description="Algorithmic orderbook based decentralised exchange."/>

          <Project 
          url="https://github.com/XabierOterino/Solidity-Chess-Game"
          image="solidity.png" 
          name="Solidity Chess Game" 
          description="Simple Chess game built in Solidity."/>

          <Project 
          url="https://github.com/XabierOterino/Linked3-JobLanding"
          image="solidity.png" 
          name="Linked3" 
          description="A complete blockchain job landing app completely built in Ethereum."/>

           <Project 
          url="https://github.com/XabierOterino/CPAMM"
          image="solidity.png" 
          name="CPAMM" 
          description="Constant Product Automated Market Maker."/>
          
          <Project 
          url="https://github.com/XabierOterino/Solidity-Roulette"
          image="solidity.png" 
          name="Roulette game" 
          description="Automated roulette gambling game built in Solidity."/>

          <Project 
          url="https://github.com/XabierOterino/StableSwapAMM"
          image="solidity.png" 
          name="Stable-Swap" 
          description="Curve-like stable-swap."/>

          <Project 
          url="https://github.com/XabierOterino/DAO"
          image="solidity.png" 
          name="DAO Implementation" 
          description="Simple DAO implementing Open Zeppelin open-source libraries."/>

          <Project 
          url="https://github.com/XabierOterino/Merkle-Tree-NFT-Whitelist"
          image="solidity.png" 
          name="Merkle Tree whitelist" 
          description="NFT whitelist that is computed off-chain and saved into a merkle tree to reduce gas use."/>

          <Project 
          url="https://github.com/XabierOterino/racks-token-erc721-wrapped"
          image="solidity.png" 
          name="ERC721-Wrapped ERC-20" 
          description="ERC721 implementation of a wrapped token."/>

          <Project 
          url="https://github.com/XabierOterino/Short-ABI-Optimization"
          image="solidity.png" 
          name="Short ABI optimization" 
          description="Contract to storage data as calldata, like rollups do."/>

          <Project 
          url="https://github.com/XabierOterino/CryptoKitties-NFT-Clon"
          image="kitties.png" 
          name="DNA mixing NFT collection" 
          description="A complex NFT collection based on Crypto Kitties model that permit DNA mixing , generation tracking and giving birth to new ones."/>

          <Project 
          url="https://github.com/XabierOterino/NFT-Marketplace"
          image="market.png" 
          name="NFT Marketplace" 
          description="Full-blockchain NFT marketplace built with Hardhat and Next.js "/>
          <Project 
          url="https://github.com/XabierOterino/Web3-Twitter"
          image="twitter.png" 
          name="Web3 Twitter" 
          description="The decentralised version of Twitter built from scracth with solidity, IPFS and Next"/>

          <Project 
          url="https://github.com/XabierOterino/Opensea-Clon/tree/main/opensea-clon"
          image="opensea.png" 
          name="Opensea Clon" 
          description="Simple Opensea clon using Third Web development tools and Next."/>

          <Project 
          url="https://github.com/XabierOterino/Defi-Dapp"
          image="defi.png" 
          name="Full Defi Dapp" 
          description="A full stack defi dapp including borrowing and lending , and exchanges."/>

          <Project 
          url="https://github.com/XabierOterino/Mempool-Watcher"
          image="node.png" 
          name="Mempool watcher" 
          description="A simple Node.js script to catch every single transaction that enters in the mempool."/>

          <Project 
          url="https://github.com/XabierOterino/Web3-Airbnb"
          image="airbnb.png" 
          name="Web3 Airbnb" 
          description="Decentralised Airbnb built with Solidity and React."/>

        </div>
        
      </div>
      <Stack />

      
      <div className={style.section} id='education'>
        <h2 className={style.title}>Education</h2>
        <h3 className={style.subtitle}>Certified my Moralis Academy</h3>
        <p className={style.details}>I had the pleasure to be educated at the most well known academy in the industry : Moralis.
            Funded by blockchain experts such as <a href='https://twitter.com/IvanOnTech' target="_blank" rel='noreferrer'  className='underline cursor-pointer'>Ivan on Tech</a>. I have a deep understanding of how blockchain and EVM work as a window to a
            more transparent, decentralised and fair world. Overall , I have also done my own research as a self-taught developer to achieve a futher more deep understanding. Here some of my most important diplomas:
        </p>

        <Diploma 
          title="Ethereum Smart Contract Programming 101" 
          text="I understand the fundamentals and logic of Solidity as a programming language."
          url="https://github.com/XabierOterino/Moralis-Certificates/blob/main/Xabier-Oterino-Ibarra-Ethereum-Smart-Contract-Programming-101-Ethereum-Smart-Contract-Programming-101-Moralis-Moralis-Academy.pdf"
        />
        <Diploma 
          title="Ethereum Smart Contract Programming 201"
          text="I have a good level as a Solidity developer, being able to implement complex logic in my code, Building Defi protocols such a Dex with good coding practices and in a secure way."
          url="https://github.com/XabierOterino/Moralis-Certificates/blob/main/Xabier-Oterino-Ibarra-Ethereum-Smart-Contract-Programming-201-Ethereum-Smart-Contract-Programming-201-Moralis-Moralis-Academy.pdf"
        />
        <Diploma 
          title="Ethereum Dapp Programming"
          text="I can build a complex NFT collection with features like DNA mixing and generation identification, like CryptoKitties did.
          I am also capable of building a fully working NFT marketplace."
          url="https://github.com/XabierOterino/Moralis-Certificates/blob/main/Xabier-Oterino-Ibarra-Build-an-NFT-Marketplace-Ethereum-Dapp-Programming-Moralis-Moralis-Academy.pdf"
        />
      
        {showAll && <> 
          <Diploma 
            title="Javascript for blockchain" 
            text="I have a deep understanding of javascript and modern javscript as ES6. Ican build clean and complex programs oriented to blockchain." 
            url="https://github.com/XabierOterino/Moralis-Certificates/blob/main/Xabier-Oterino-Ibarra-2021-JavaScript-Programming-for-Blockchain-Developers-Javascript-Programming-for-Blockchain-Developers-Moralis-Moralis-Academy.pdf"
          />
          <Diploma 
            title="Bitcoin 101" 
            text="Bitcoin from the very basic concepts like private and pulic keys to the most difficult ones such as halving, nodes and clients , PoW , forks etc." 
            url="https://github.com/XabierOterino/Moralis-Certificates/blob/main/Xabier-Oterino-Ibarra-Blockchain-amp-Bitcoin-101-Blockchain-amp-Bitcoin-101-Moralis-Moralis-Academy.pdf"
          />
          <Diploma 
            title="Ethereum 101" 
            text="Ethereum , the world machine is definitely going to change the world, creating a new way of interacting : smart contracts.
          I have a complete understanding of what EVM is and how it works." 
            url="https://github.com/XabierOterino/Moralis-Certificates/blob/main/Xabier-Oterino-Ibarra-Ethereum-101-Ethereum-101-Moralis-Moralis-Academy.pdf"
        />
          <Diploma
            title="Ethereum Smart Contract Security"
            text="I know the the most common security issues in smart contracts such as reentrancy , over/underflow , frontrunning...Also I know the history of biggest hacks in the network like 'The DAO Hack'."
            url="https://github.com/XabierOterino/Moralis-Certificates/blob/main/Xabier-Oterino-Ibarra-Ethereum-Smart-Contract-Security-Ethereum-Smart-Contract-Security-Moralis-Moralis-Academy.pdf"
          />
          <Diploma
            title="Moralis Web3 Programming"  
            text="I'm familiarized with Moralis' Web3 SDK and I can use it to build secure and scalable dapps rapidly."
            url="https://github.com/XabierOterino/Moralis-Certificates/blob/main/Xabier-Oterino-Ibarra-Moralis-Web3-dApp-Programming-Moralis-Web3-dApp-Programming-Moralis-Academy.pdf"
            /> 
          <Diploma 
            title="React Web Development 101"
            text="I know how to use the React library to build dynamic and efficient web pages using frameworks like Next."
            url="https://github.com/XabierOterino/Moralis-Certificates/blob/main/Xabier-Oterino-Ibarra-React-Web-Development-101-React-Web-Development-101-Moralis-Moralis-Academy.pdf"
          />
        </>}
        {
          !showAll?<button className="text-theme font-semibold" onClick={()=>setShowAll(true)}>Show More</button>
          : <button className="text-theme font-semibold" onClick={()=>setShowAll(false)}>Hide</button>
        }
        
      </div>
      <div className={style.section} id="hireme">
        <h1 className={style.title}>Hire me</h1>
        <Hireme />
      </div>
      <Footer />
      
    </>
  )
}
