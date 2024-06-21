import React from 'react'
import Button from '../components/Button.jsx'
import {shoe8} from '../assets/images'
const SpecialQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      <h2 className="font-bold text-4xl font-palanquin capitalize lg:max-w-lg">
      We Provide You
      <span className="text-coral-red"> Super </span> <br></br>
      <span className="text-coral-red">Quality</span> Shoes<br/>
      </h2>
      <p className="mt-4 leading-7 text-slate-gray font-montserrat text-lg  lg:max-w-lg">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
      <p className="mt-5 text-slate-gray font-montserrat text-lg lg:max-w-lg">Our dedication to detail and excellence ensures your satisfaction</p>
      <div className="mt-10">
      <Button label="view details"/>
      </div>
      </div>
      <div className="flex  justify-center items-center">
      <img
      src={shoe8}
      alt="shoe8"
      width={570}
      height={522}
      />
      </div>
    </section>
  )
}

export default SpecialQuality
