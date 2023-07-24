import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import { ShopingCartContext } from '../Context/Context'
import OrdersCard from '../Components/OrdersCard/OrdersCard'

function MyOrders() {

  const context = useContext(ShopingCartContext)

  return(
    <Layout>
      <div className='flex items-center justify-center relative w-80 text-white'>
        <h1 className='text-2xl mb-6'>Mis Órdenes</h1>
      </div>
      {
        context.order.map((order, index) => (

          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
            totalProducts={order.totalProducts}
            totalPrice={order.totalPrice}
            />
          </Link>
          
        ))
      }
    </Layout>
  )
}

export default MyOrders