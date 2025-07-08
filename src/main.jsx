
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './pages/Home'
import Order from './pages/Order'
import MyOrders from './pages/MyOrders'
import Auth from './pages/Auth'
import AdminProducts from './pages/admin/Products'
import AdminPizzaFlavors from './pages/admin/PizzaFlavors'
import AdminOrders from './pages/admin/Orders'
import AdminReports from './pages/admin/Reports'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/order" element={<Order />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/pizza-flavors" element={<AdminPizzaFlavors />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/reports" element={<AdminReports />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
