import { useRoutes } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Index from '@/views/Index/Index.jsx'

const router = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Index />
      }
    ]
  }
]

const Routes = () => {
  return useRoutes(router)
}

export default Routes
