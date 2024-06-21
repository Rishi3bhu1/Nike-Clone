import React from 'react'
import Button from '../components/Button.jsx'
const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    id="contact-us">
      <h3 className="font-bold text-4xl leading-[68px] lg:max-w-md font-palanquin">
        Sign Up for <span className="text-coral-red"> Updates </span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 sm:border sm:border-slate-gray rounded-full p-2.5">
        <input type="text" placeholder="subscribe@nike.com"
        className="input"></input>
        <div className="flex max-sm:justidy-end items-center max-sm:w-full">
          <Button label="sign up" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe