import { Col, Row } from 'antd'
import ArticleList from '@/views/Index/ArticleList.jsx'

const blockStyle = {
  height: '100%',
  padding: '20px 30px'
}

const Index = () => {
  return (
    <Row style={{ height: '100%' }}>
      <Col xs={6} sm={4} md={6} style={{ ...blockStyle, textAlign: 'right' }}></Col>
      <Col xs={18} sm={16} md={12}>
        <ArticleList />
      </Col>
      <Col xs={0} sm={4} md={6} style={blockStyle}></Col>
    </Row>
  )
}

export default Index
