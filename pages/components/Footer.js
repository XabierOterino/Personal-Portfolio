import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className=' p-16 mt-16 bg-black'>
      <div className='mx-16 flex justify-between border-b border-secondary w-full'>
          <h1 className=' '>Xabier Oterino</h1>
          <div className='flex mx-16 space-x-2 mb-2 items-start'>
            <a href='https://twitter.com/mrWojack_eth' target="blank">
              <div className='h-8 w-8 flex justify-center items-center  rounded-full border border-secondary'> <TwitterIcon /></div>
            </a>
            <a href='https://github.com/XabierOterino?tab=repositories' target="blank">
              <div className='h-8 w-8 flex justify-center items-center  rounded-full border border-secondary'> <GitHubIcon /></div>
            </a>
          </div>
      </div>
    </div>
  )
}

export default Footer