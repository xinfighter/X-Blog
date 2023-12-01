import { useRoutes } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'

const router = [
  {
    path: '/',
    element: <MainLayout />,
    children: [{}]
  }
]

const Routes = () => {
  return useRoutes(router)
}

export default Routes
