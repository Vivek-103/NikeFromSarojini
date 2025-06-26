import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
          src={offer} width={773} height={687} className="object-contain w-full" 
        />
      </div>
       <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span>
          <span className="text-coral-red"> Offer </span> Available
        </h2>
        <p className="mt-4 lg:max-w-l info-text">
          Your old shoes are crying—upgrade now before they walk off in shame. Grab Nike gear at prices so low, even your wallet might break a sweat. Hurry, before your size vanishes like motivation on a Monday!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Unlock limited-time savings on premium Nike products designed to elevate your performance. Whether you're training, competing, or simply moving through your day, now is the perfect moment to invest in gear that works as hard as you do. Act fast—these exclusive prices won't last.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" 
          iconUrl={arrowRight} />
          <Button label="Learn More"
          backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer