import React from 'react'

const Newsletter = () => {
  return (
    <div>
      <h1>never Miss a blog</h1>
      <p>Subscribe to ger the latest blog, new tech, and exclsive news.</p>
      <form className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
        <input className='border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500' type="text" placeholder='Enter your email id'required/>
        <button type='submit' className='md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none'>Subscribe</button>
      </form>
    </div>
  )
}

export default Newsletter
