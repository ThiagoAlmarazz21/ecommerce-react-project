import { useContext } from 'react'
import { ShopingCartContext } from '../Context/Context'
import Card from '../Components/Card/Card'
import Layout from '../Components/Layout/Layout'
import ProductDetail from '../Components/ProductDetail/ProductDetail'

function Home() {

  const context = useContext(ShopingCartContext)

  const renderView = () => {

    if(context.filteredItems?.length > 0) {
      return context.filteredItems?.map(item =>
        <Card key={item.id} data={item} />
        )
    } else {
      return <h2 className='flex items-center text-xl text-red-400 gap-2 animate-jump-forward'>No hay resultados para la busqueda <i className='bx bxs-error-circle'></i></h2>
    }
  }

  return(
    <Layout>
      <h1 className='text-white text-2xl mb-4 font-extralight animate-fade'>¿Qué estás buscando?</h1>
      <input
      className='text-white mb-4 bg-transparent animate-fade border border-white rounded-md py-1 px-2 focus:outline-none hover:border-sky-300 focus:border-sky-300 placeholder:text-white placeholder:font-extralight movil:mb-10'
      type='text'
      placeholder='Buscar producto...'
      value={context.searchByTitle}
      onChange={(e) => context.setSearchByTitle(e.target.value)}
      />

      <div className='flex items-center justify-center flex-wrap gap-4 w-full max-w-[1400px] animate-fade movil-sm:grid movil-sm:grid-cols-1 movil-sm:place-items-center movil-sm:gap-1'>

        {renderView()}
    
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home