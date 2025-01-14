import React from 'react'
import Button from '../components/Button.jsx'
import {offer} from '../assets/images'
import { arrowRight } from '../assets/icons'
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
      <h2 className="font-bold text-4xl font-palanquin capitalize lg:max-w-lg">
      <span className="text-coral-red"> Special </span>Offer
      </h2>
      <p className="mt-4 leading-7 text-slate-gray font-montserrat text-lg  lg:max-w-lg">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
      <p className="mt-5 text-slate-gray font-montserrat text-lg lg:max-w-lg">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
      <div className="flex mt-11 gap-4 flex-wrap">
      <Button label="Shop now" iconURL={arrowRight}/>
      <Button 
      label="Learn More"
      backgroundColor="bg-white"
      borderColor="border-slate-gray"
      textColor="text-slate-gray"/>
      </div>
      </div>
    </section>
  )
}

export default SpecialOffer
