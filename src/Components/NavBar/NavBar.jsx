import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShopingCartContext } from '../../Context/Context'
import Menu from '../Menu/Menu'

function NavBar() {

  const context = useContext(ShopingCartContext)
  const activeStyle = 'text-sky-300 decoration-sky-300 underline underline-offset-4 transition duration-500'

  const showCheckoutSideMenu = () => {
    context.closeProductDetail()
    context.openCheckoutSideMenu()
  }

  return(
    <nav className='flex justify-between item-center bg-Background fixed z-10 top-0 w-full py-5 px-8 text-md text-white movil-sm:py-2 movil:py-2 laptop:py-2'>

      <div className='flex items-center font-semibold text-sky-300 text-2xl hover:text-sky-600 duration-200 lg:hidden'>
      <NavLink
              to='/'
              onClick={() => context.setSearchByCategory(null)}
              >
                TDShop
          </NavLink>
      </div>

      <ul className='flex items-center gap-3 movil-sm:hidden movil:hidden laptop:hidden'>

        <li className='font-semibold text-sky-300 text-2xl hover:text-sky-600 duration-200'>
          <NavLink
              to='/'
              onClick={() => context.setSearchByCategory(null)}
              >
                TDShop
          </NavLink>
        </li>

        <li className='hover:text-sky-300 transition duration-200'>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory(null)}
            className={({ isActive }) => isActive ? activeStyle : undefined}
            >
            Todos
          </NavLink>
        </li>

        <li className='hover:text-sky-300 transition duration-200'>
          <NavLink
          to='/clothes'
          onClick={() => context.setSearchByCategory('clothing')}
          className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Ropa
          </NavLink>
        </li>

        <li className='hover:text-sky-300 transition duration-200'>
          <NavLink
          to='/electronics'
          onClick={() => context.setSearchByCategory('electronics')}
          className={({ isActive }) => isActive ? activeStyle : undefined}
          >
          Electrónica
          </NavLink>
        </li>

        <li className='hover:text-sky-300 transition duration-200'>
          <NavLink
          to='/others'
          onClick={() => context.setSearchByCategory('jewelery')}
          className={({ isActive }) => isActive ? activeStyle : undefined}
          >
          Otros
          </NavLink>
        </li>

      </ul>

      <ul className='flex items-center gap-3 movil-sm:hidden movil:hidden laptop:hidden'>

        <li className='flex items-center justify-center text-sm text-white'>
        <i className='bx bx-envelope text-sm mr-1'></i> youremail@gmail.com
        </li>

        <li>
          <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>
            Mis Órdenes <i className='bx bx-shopping-bag'></i>
          </NavLink>
        </li>

        <li>
          <NavLink to='/my-account' className='bg-sky-400 p-2 hover:bg-sky-600 transition duration-200 rounded-sm'>
            Cuenta<i className='bx bx-user bg-transparent'></i>
          </NavLink>
        </li>

        <li className='relative'>
          <i
          onClick={() => showCheckoutSideMenu()} 
          className={'bx bxs-cart-alt text-2xl cursor-pointer hover:text-sky-300 transition duration-200'}>
          </i>
          <span className='absolute top-0 cursor-default'>{context.cartProducts.length}</span>

        </li>

      </ul>

      <ul className='lg:hidden'>
        <Menu />
      </ul>

    </nav>
    
  )
}

export default NavBar