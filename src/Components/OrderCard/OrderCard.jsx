import React from 'react'

const OrderCard = props => {

  const { id, title, imageUrl, price, handleDelete } = props

  let renderDeleteIcon
    if(handleDelete) {
      renderDeleteIcon = <i
      onClick={() => handleDelete(id)}
      className='bx bx-x font-light cursor-pointer hover:text-red-500 transition duration-200 text-white text-2xl'></i>
    }

  return (
    <article className='flex justify-between items-center mb-4 animate-fade'>
      <div className='flex items-center gap-3'>

        <figure className='w-24 h-24 rounded-md'>
          <img className='w-full h-full rounded-md object-cover' src={imageUrl} alt={title}/>
        </figure>
        <p className='text-sm font-light line-clamp-2'>{title}</p>
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        {renderDeleteIcon}
      </div>

    </article>
  )
}

export default OrderCard