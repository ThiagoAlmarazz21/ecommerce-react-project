import { useState, useContext, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { ShopingCartContext } from '../../Context/Context'


function Menu() {

  const showCheckoutSideMenu = () => {
    context.closeProductDetail()
    context.openCheckoutSideMenu()
  }

  const context = useContext(ShopingCartContext)

  const [open, setOpen] = useState(false)

  let menuRef = useRef()

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)) {
        setOpen(false)
      } else {
        
      }
    }

    document.addEventListener('mousedown', handler)

    return() => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (

    <div>

      <button onClick={() => setOpen(true)}>
        <i className='bx bx-menu text-5xl'></i>
      </button>

      <div className={`${!open && 'hidden'} bg-grey-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}>
      </div>

      <div ref={menuRef} className={`${open ? 'w-80 movil-sm:w-full' : 'w-0 movil-sm:w-0'} bg-sky-600 min-h-screen fixed top-0 right-0 transition-all duration-300`}>
        <div>

          <button onClick={() => setOpen(false)} className='hover:text-red-500 transition duration-200'>
            <i className='bx bx-x text-5xl'></i>
          </button>

          <div className={`${!open && 'hidden'} flex flex-col items-center text-center text-xl w-full`}>

              <NavLink onClick={() => setOpen(false)} to='/my-account' className='py-4 hover:bg-gray-300/30 w-full transition-all duration-200'>
                Cuenta <i className='bx bx-user bg-transparent'></i>
              </NavLink>

              <NavLink onClick={() => setOpen(false)} to='/my-orders' className='py-4 hover:bg-gray-300/30 w-full transition-all duration-200'>
                  Mis Órdenes <i className='bx bx-shopping-bag'></i>
              </NavLink>

              <NavLink
              onClick={
                () => {
                  setOpen(false)
                  showCheckoutSideMenu()
                }}
              className='py-4 hover:bg-gray-300/30 w-full transition-all duration-200 flex items-center justify-center'>
                  Mis productos <i className='bx bx-cart'></i><span className='text-sm'>{context.cartProducts.length}</span>
              </NavLink>

              <h2 className='py-4 font-light'>Categorías</h2>

              <div className='flex flex-col'>
                <NavLink
                  to='/'
                  onClick={() => {
                    context.setSearchByCategory(null)
                    setOpen(false)
                  }}
                  className='py-4'
                  >
                  Todo
                </NavLink>

                <NavLink
                  to='/clothes'
                  onClick={() => {
                    context.setSearchByCategory('clothing')
                    setOpen(false)
                  }}
                  className='py-4'
                >
                  Ropa
                </NavLink>

                <NavLink
                  to='/electronics'
                  onClick={() => {
                    context.setSearchByCategory('electronics')
                    setOpen(false)
                  }}
                  className='py-4'
                  >
                  Electrónica
                </NavLink>

                <NavLink
                  to='/others'
                  onClick={() => {
                    context.setSearchByCategory('jewelery')
                    setOpen(false)
                  }}
                  className='py-4'
                  >
                  Otros
                </NavLink>
              </div>


          </div>

        </div>
      </div>

    </div>

  )
}

export default Menu