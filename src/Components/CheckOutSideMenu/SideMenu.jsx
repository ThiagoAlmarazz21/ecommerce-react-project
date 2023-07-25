import { useContext } from "react"
import { Link } from 'react-router-dom'
import { ShopingCartContext } from "../../Context/Context"
import OrderCard from '../OrderCard/OrderCard'
import { totalPrice } from "../Utils/totalPrice"
import './SideMenu.css'

const CheckoutSideMenu = () => {

  const context = useContext(ShopingCartContext)

  const productsInCart = (id) => {
    const products = context.cartProducts

    if(products == 0) {
      return(
        <div className='mt-10 text-white font-light text-xl'>
          <p>Aún no hay productos</p> 
        </div>
      )
    }
  }

  const handleDelete = (id) => {  
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  
  const handleCheckout = () => {
    
    const date = new Date()
    
    const orderToAdd = {
      date: date.toLocaleDateString(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.closeCheckoutSideMenu()
    context.setSearchByTitle(null)
  }

  return(
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex animate-slide-right' : 'right-[-1000px] transition-all duration-500'} flex flex-col bg-Background items-center w-[360px] h-[calc(100vh-100px)] fixed z-40 top-[68px] right-0 border border-white rounded-[4px] movil-sm:w-full movil-sm:h-screen movil-sm:top-0 movil:w-full movil:h-screen`}>
      <div className="flex justify-between items-center w-full p-2">
      <h2 className="text-xl text-white font-light">Mis productos</h2>
      <i 
      onClick={() => context.closeCheckoutSideMenu()}
      className='bx bx-x font-light cursor-pointer hover:text-red-500 transition duration-200 text-white text-4xl'></i>
      </div>

      {productsInCart()}
      
      <div className='px-6 text-neutral-200 scroll-card flex-1'>
          {
          context.cartProducts.map(product => (
            <OrderCard 
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            handleDelete={handleDelete}
            />
          ))
          }
      </div>

      <div className={`${context.count >= 1 ? 'flex' : 'hidden'} px-6 text-white`}>

        <p className="flex justify-between items-center">
          <span className="font-light text-lg">Total:</span>
          <span className="font-semibold ml-2">${totalPrice(context.cartProducts)}</span>
        </p>

      </div>

      <div className={`${context.count >= 1 ? 'flex animate-fade' : 'hidden'} w-full items-center justify-center p-2`}>
        <Link to='/my-orders/last' className="w-full">
          <button onClick={() => handleCheckout()} className='bg-white text-black font-medium border-2 border-transparent hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition duration-200 w-full rounded-md py-2 mb-4'
          >
            Verificar
          </button>
        </Link>

      </div>


    </aside>
  )
}

export default CheckoutSideMenu