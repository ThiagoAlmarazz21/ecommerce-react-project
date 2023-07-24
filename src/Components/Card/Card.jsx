import { useContext } from 'react'
import { ShopingCartContext } from '../../Context/Context'
import { useSnackbar } from 'notistack'

function Card(data) {

  const context = useContext(ShopingCartContext)

  const productToShow = (productDetail) => {
    context.openProductDetail()
    context.setShowProduct(productDetail)
    context.closeCheckoutSideMenu()
  }

  const addProductsToCart = (productData) => {
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
  }

  const {enqueueSnackbar} = useSnackbar()

  const showNotification = () => {
    enqueueSnackbar('Item agregado al carrito', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      }
    })
  }

  const renderIcon = (id) => {

    const isInCard = context.cartProducts.filter(product => product.id === id).length > 0

    if (isInCard) {
      return (
        <button
        className='absolute top-0 right-0 bg-white flex items-center justify-center w-6 h-6 rounded-full m-2 p-1 transition duration-200 hover:bg-sky-300 hover:text-white active:bg-sky-600'
        >
          <i className='bx bx-check flex items-center text-white bg-sky-300 rounded-full w-6 h-6 text-2xl animate-jump-forward-iconcheck'></i>
        </button>
      )
    } else {
      return (  
        <button
        className='absolute top-0 right-0 bg-white flex items-center justify-center w-6 h-6 rounded-full m-2 p-1 transition duration-200 hover:bg-sky-300 hover:text-white active:bg-sky-600'
        onClick={() => {
          addProductsToCart(data.data)
          showNotification()
        }}
        >
          <i className='bx bx-plus bg-transparent text-2xl'></i>
        </button>
      )
    }
  }

  return(
    <div className='cursor-pointer w-[320px] h-[400px] mb-[100px] hover:scale-105 transition duration-200'>

      <figure className='relative mb-2 w-full h-full rounded-md'>

        {renderIcon(data.data?.id)}

        <img 
        onClick={() => productToShow(data.data)}
        className="w-full h-full object-cover"
        src={data.data?.image}
        alt={data.data?.title}
         />

        <span className="absolute bottom-0 left-0 bg-white/60 rounded-md text-sm text-black m-1 px-2 py-1">{data.data?.category}
        </span>

        <p className="flex text-white justify-between text-md mt-1">
          <span className="bg-transparent truncate mr-8 font-medium">{data.data?.title}</span>
          <span className="bg-transparent font-light">${data.data?.price}</span>
        </p>

      </figure>

    </div>
  )
}


export default Card