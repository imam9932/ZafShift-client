import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Layout/RootLayout.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Coverage from './Pages/Coverage/Coverage.jsx';
import AuthLayout from './Layout/AuthLayout.jsx';
import Register from './Pages/AuthPage/Register/Register.jsx';
import Login from './Pages/AuthPage/Login/Login.jsx';
 import { ToastContainer } from 'react-toastify';
import AuthProvider from './Contexts/AuthContext/AuthProvider.jsx';
import PrivateRoute from './Route/PrivateRoute/PrivateRoute.jsx';
import Rider from './Pages/Rider/Rider.jsx';
import SendParcel from './Pages/SendPercel/SendParcel.jsx';
import DashBoard from './Layout/DashBoard.jsx';
import MyParcels from './Pages/DashboardPage/MyParcels.jsx';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
 import PaymentSuccessful from './Pages/DashboardPage/PaymentSuccessful.jsx';
import PaymentCancell from './Pages/DashboardPage/PaymentCancell.jsx';
import PaymentHistory from './Pages/DashboardPage/PaymentHistory.jsx';
import ApproveRiders from './Pages/DashboardPage/ApproveRiders.jsx';
import UsersManagement from './Pages/DashboardPage/UsersManagement.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/rider',
        element: <PrivateRoute>
          <Rider></Rider>
        </PrivateRoute>,
        loader: () => fetch('/warehouses.json').then(res => res.json())
      },
      {
        path: '/sendParcel',
        element: <PrivateRoute>
          <SendParcel></SendParcel>
        </PrivateRoute>,
        loader: () => fetch('/warehouses.json').then(res => res.json())
      },
      {
        path: '/coverage',
        element: <Coverage></Coverage>,
        loader: () => fetch('/warehouses.json').then(res => res.json())
      }
    ]
  },
  {
    path: '/',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
  {
    path:'/dashboard',
    element:<PrivateRoute>
      <DashBoard></DashBoard>
    </PrivateRoute>,
    children:[
      {
        path:'my-parcels',
        element:<MyParcels></MyParcels>
      },
      // {
      //   path:'payment/:parcelId',
      //   element: <Payment></Payment>
      // },
      {
        path:'payment-success',
        element:  <PaymentSuccessful></PaymentSuccessful>
      },
      {
        path:'payment-cancelled',
        element:   <PaymentCancell></PaymentCancell>
      },
      {
        path:'payment-history',
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path:'approve-riders',
        element:<ApproveRiders></ApproveRiders>
      },
      {
        path:'users-management',
        element:<UsersManagement></UsersManagement>
      }
    ]
  }
]);

const queryClient=new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
     <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </AuthProvider>,
   </QueryClientProvider>
  </StrictMode>,
)
