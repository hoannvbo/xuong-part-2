import { Route, Routes } from "react-router-dom"
import OutletView from "../viewWedsite/OutletView"
import Home from "../pages/user/Home"
import ShopSP from "../pages/user/Shop"
import Categories from "../components/view/Categories"
import CategoryDetail from "../pages/user/DetailCategory"
import DetailProduct from "../pages/user/DetailProduct"
import Signin from "../pages/login/signin"
import Signup from "../pages/login/signup"
import Cart from "../pages/user/Cart"
import Order from "../pages/user/Order"
import LayoutAdmin from "../pages/(dashboard)/layout"
import ProductManagement from "../pages/(dashboard)/product/page"
import ProductEditPage from "../pages/(dashboard)/product/_components/edit"
import ProductAddPage from "../pages/(dashboard)/product/_components/add"
import { Toaster } from "../components/ui/toaster"


function Router() {

  return (
    <>
      <Routes>

      <Route path='/' element={<OutletView />} >
          <Route index element={<Home />} />
          <Route path='shop' element={<ShopSP />} />
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/detailcategory/:id' element={<CategoryDetail/>}/>
          <Route path='products/:id' element={<DetailProduct />} />
          <Route path='signin' element={<Signin/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='carts' element={<Cart/>}/>
          <Route path='order' element={<Order/>}/>
        </Route>

        <Route path='admin' element={<LayoutAdmin />} >
          <Route path='products' element={<ProductManagement/>}/>
          <Route path='products/:id/edit' element={<ProductEditPage />} />
          <Route path='products/add' element={<ProductAddPage />} />
        </Route>

      </Routes>
      <Toaster/>

    </>
  )
}

export default Router
