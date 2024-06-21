import React from 'react'
import { star } from '../assets/icons'
const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center">
        <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
        />
            <p className="text-center info-text mt-4 max-w-sm">{feedback}</p>
        </div>
        <div className="flex justify-center items-center gap-2 mt-2">
            <img 
            src={star}
            />
            <span className="font-montserrat text-slate-gray text-xl">({rating})</span>
        </div>
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard
