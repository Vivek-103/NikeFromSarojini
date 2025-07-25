import React from 'react'
import Button from '../components/Button'

const FollowUs = () => {
  return (
    <section className='max-container flex justify-between items-center max-lg:flex-col gap-10 id=contact-us'>
      <h3 className="text-4xl leadiing-[68px] lg:max-w-md font-palanquin font-bold">Sign Up for 
        <span className="text-coral-red"> 
           Updates </span> & NewsLetter
      </h3>
      <div className="lg:max-w-[40%] flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type = "text"
        placeholder="subscribe@NIKE.com"
        className="input"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
  <Button label="Sign Up" fullWidth />
</div>

      </div>

    </section>
  )
}

export default FollowUs