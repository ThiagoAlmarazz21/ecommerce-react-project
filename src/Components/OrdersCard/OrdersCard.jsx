import React from 'react'

const OrdersCard = props => {

  const { totalProducts, totalPrice } = props

  return (
    <article className='flex justify-between items-center bg-white mb-6 border-2 border-sky-600 rounded-md p-4 w-80 shadow-[0_7px_10px_rgba(0,0,0)]'>

        <div className='flex justify-between w-full '>

          <div className='flex flex-col font-normal'>
            <span className='flex items-center gap-1'><i class='bx bx-calendar text-2xl'></i> 21-7-2020</span>
            <span className='flex items-center gap-1'><i class='bx bx-cart-alt text-2xl' ></i> {totalProducts}</span>
          </div>
          <div className='flex items-center'>
            <span className='text-2xl text-green-600'>${totalPrice}</span>
            <i className='bx bx-chevron-right text-4xl'></i>
          </div>
        </div>

    </article>
  )
}

export default OrdersCard