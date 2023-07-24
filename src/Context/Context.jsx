import { createContext, useState, useEffect } from 'react'

export const ShopingCartContext = createContext()

export const ShopingCartProvider = ({ children }) => {
  // Shopping Cart * Incrementar carrito de compra 
  const [count, setCount] = useState(0)

  // Product detail * Saber si esta abierto o cerrado el detalle
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

  // Abrir y cerrar el detale del producto 
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Checkout Side Menu * Saber si esta abierto o cerrado el detalle
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)

  // Abrir y cerrar el detale del producto 
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Mostrar detalle del producto 
  const [showProduct, setShowProduct] = useState({})  
  // Shopping Cart * Agregar productos al carrito 
  const [cartProducts, setCartProducts] = useState([])

  // Orden
  const [order, setOrder] = useState([])  
  
  // Get products
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)
  
  // Filtrar lo que escribimos en el input
  const [searchByTitle, setSearchByTitle] = useState(null)
  
  // Filtrar por categoria
  const [searchByCategory, setSearchByCategory] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>setItems(data))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if(searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }

    if(searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }

    if(searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if(!searchType) {
      return items
    }
  }

  useEffect(() => {
    if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])

  return (
    <ShopingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      showProduct,
      setShowProduct,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      setIsCheckoutSideMenuOpen,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      searchByCategory,
      setSearchByCategory
    }}>
      {children}
    </ShopingCartContext.Provider>
  )
}