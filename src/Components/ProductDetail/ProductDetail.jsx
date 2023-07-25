import { useContext } from "react"
import { ShopingCartContext } from "../../Context/Context"
import { useSnackbar } from 'notistack'
import '../CheckOutSideMenu/SideMenu.css'

const ProductDetail = () => {
  const context = useContext(ShopingCartContext)

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex animate-slide-up' : 'right-[-1000px] transition-all duration-1000'} flex-col bg-Background items-center w-[360px] h-[calc(100vh-80px)] fixed z-10 right-0 border border-white rounded-[4px] movil-sm:w-full movil-sm:h-screen movil-sm:top-0 movil-sm:z-20 movil:w-full movil:h-screen movil:top-0 movil:z-20`}>
      <div className="flex justify-between items-center w-full p-2">
      <h2 className="text-xl text-white font-light">Detalles</h2>
      <i 
      onClick={() => {context.closeProductDetail()}}
      className={`bx bx-x font-light cursor-pointer hover:text-red-500 transition duration-200 text-white text-4xl`}></i>
      </div>
      <figure className='w-full h-[250px] p-5'>
        <img
        className="w-full h-full object-cover rounded-lg"
        src={context.showProduct.image} 
        alt={context.showProduct.title} />
      </figure>
      <div className="scroll-container scroll-card">

        <div className="flex flex-col items-center">
          
          <p className='text-xl text-white font-light'>
            <span>${context.showProduct.price}</span>
          </p>
          <p className='text-white text-center font-semibold line-clamp-1'>
            <span>{context.showProduct.title}</span>
          </p>
          <p className='text-white text-sm text-center mt-4 m-6'>
            <span>{context.showProduct.description}</span>
          </p>

        </div>

      </div>

    </aside>
  )
}

export default ProductDetail