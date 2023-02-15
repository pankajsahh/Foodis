import React from 'react'
import './ChefCard.css'

function ChefCard({img,name,desc ,FoodCard }) {
  return (
    <div  className={`${FoodCard?"FoodCard":"ChefCard"}  my-4 gap-2 py-2 d-flex justify-content-center flex-column align-items-center`}>
      <img width={70} height={70} src={img} alt="chefimg" />
      <h6 className='m-0'>{name}</h6>
      <p className='text-center  m-0 '>{desc}</p>
    </div>
  )
}

export default ChefCard