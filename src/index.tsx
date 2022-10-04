import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductsPage/>
  },
  {
    path: '/about',
    element: <AboutPage/>
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <RouterProvider router={router} />
)