import {createBrowserRouter, RouterProvider} from 'react-router-dom' 

import LandingPage from 'pages'
import Login from 'pages/Login'

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
  },
])
const index = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default index