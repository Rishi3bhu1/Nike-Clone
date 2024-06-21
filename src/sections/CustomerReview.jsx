import React from 'react'
import {reviews} from '../constants'
import ReviewCard from '../components/ReviewCard.jsx'

const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="m-auto mt-4 info-text text-center max-w-lg">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col">
        {reviews.map((review)=>(
          <ReviewCard 
          key={review.customerName}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReview
