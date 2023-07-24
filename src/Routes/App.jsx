import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShopingCartProvider } from '../Context/Context'
import { SnackbarProvider } from 'notistack'
import Home from '../Pages/Home'
import MyAccount from '../Pages/MyAccount'
import MyOrder from '../Pages/MyOrder'
import MyOrders from '../Pages/MyOrders'
import NotFound from '../Pages/NotFound'
import SignIn from '../Pages/SignIn'
import NavBar from '../Components/NavBar/NavBar'
import CheckoutSideMenu from '../Components/CheckOutSideMenu/SideMenu'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }
  ])
  return routes
}

function App() {
  return(
    <ShopingCartProvider>
      <BrowserRouter>
        <SnackbarProvider
        maxSnack={1}
        autoHideDuration={2000}
        >
          <CheckoutSideMenu />
          <AppRoutes />
          <NavBar />
        </SnackbarProvider>
      </BrowserRouter>
    </ShopingCartProvider>
  )
}

export default App