import { useContext } from 'react'
import { ShopingCartContext } from '../Context/Context'
import { Link } from 'react-router-dom'
import OrderCard from '../Components/OrderCard/OrderCard'
import Layout from '../Components/Layout/Layout'

function MyOrder() {

  const context = useContext(ShopingCartContext)

  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if (index === 'last') index = context.order?.length - 1

  return(
    <Layout>
      <div className='flex items-center justify-center relative w-80 text-white mb-2 '>
        <Link to={'/my-orders'} className='absolute left-0'>
          <i className='bx bx-chevron-left text-3xl hover:-translate-x-1 transition duration-200' ></i>
        </Link>
        <h1 className='text-2xl'>Órden</h1>
      </div>

      <div className='w-80 text-neutral-200'>
          {
          context.order?.[index]?.products.map(product => (
            <OrderCard 
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            />
          ))
          }
      </div>

    </Layout>
  )
}

export default MyOrder