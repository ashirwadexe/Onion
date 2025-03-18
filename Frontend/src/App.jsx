import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Order from './pages/Order';

const App = () => {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/cart',
      element: <Cart/>
    },
    {
      path: '/order',
      element: <Order/>
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App