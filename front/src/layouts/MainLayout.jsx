import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import Header from '@/components/Header.jsx'

const MainLayout = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Header style={{ borderBottom: '1px solid grey' }}>
        <Header />
      </Layout.Header>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  )
}

export default MainLayout
