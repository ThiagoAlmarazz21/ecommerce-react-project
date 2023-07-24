import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {

  const [open, setOpen] = useState(false)

  return (

    <div>
      <button onClick={() => setOpen(true)}>
        <i className='bx bx-menu text-5xl'></i>
      </button>

      <div className={`${!open && 'hidden'} bg-grey-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}>
      </div>

      <div className={`${open ? 'w-80' : 'w-0'} bg-sky-600 min-h-screen fixed top-0 right-0 transition-all duration-300`}>
        <div>

          <button onClick={() => setOpen(false)} className='hover:text-red-500 transition duration-200'>
            <i className='bx bx-x text-4xl'></i>
          </button>

          <div className={`${!open && 'hidden'} flex flex-col items-center text-center text-xl w-full cursor-pointer`}>

              <NavLink onClick={() => setOpen(false)} to='/my-account' className='py-4 hover:bg-gray-300/30 w-full transition-all duration-200'>
                Cuenta <i className='bx bx-user bg-transparent'></i>
              </NavLink>

              <NavLink onClick={() => setOpen(false)} to='/my-orders' className='py-4 hover:bg-gray-300/30 w-full transition-all duration-200'>
                  Mis Órdenes <i className='bx bx-shopping-bag'></i>
              </NavLink>


          </div>

        </div>
      </div>

    </div>

  )
}

export default Menu