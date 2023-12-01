import { Avatar, Button, Col, Divider, Row, Space, Typography } from 'antd'
import ThemeSwitch from '@/components/ThemeSwitch.jsx'
import { GithubFilled, UserOutlined } from '@ant-design/icons'

const Header = () => {
  return (
    <Row align="middle" wrap={false}>
      <Col xs={6} sm={4} md={6} style={{ textAlign: 'right' }}>
        <Typography.Title level={2} style={{ margin: 0 }}>
          X-Blog
        </Typography.Title>
      </Col>
      <Col xs={18} sm={16} md={12} style={{ textAlign: 'center' }}></Col>
      <Col xs={0} sm={4} md={6} style={{ textAlign: 'left' }}>
        <Space>
          <ThemeSwitch />
          <Divider type="vertical" />
          <Button shape="circle" icon={<GithubFilled />} />
          <Avatar icon={<UserOutlined />} />
        </Space>
      </Col>
    </Row>
  )
}

export default Header
