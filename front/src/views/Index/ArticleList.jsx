import VirtualList from 'rc-virtual-list'
import { useEffect, useState } from 'react'
import { Avatar, List, Space } from 'antd'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons'

const articles = Array.from({ length: 1000 }).map((_, i) => ({
  id: i,
  href: `https://ant.design`,
  title: `ant design part ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  like: 565,
  collection: 25,
  comment: 135
}))

const containerHeight = window.innerHeight - 64

const IconText = ({ icon, text }) => (
  <Space>
    {icon}
    {text}
  </Space>
)
const ArticleList = () => {
  const [data, setData] = useState([])

  const appendData = () => {
    setData((prev) => {
      return [
        ...prev,
        articles[prev.length],
        articles[prev.length + 1],
        articles[prev.length + 2],
        articles[prev.length + 3],
        articles[prev.length + 4]
      ]
    })
  }

  useEffect(() => {
    appendData()
  }, [])

  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === containerHeight) {
      appendData()
    }
  }

  return (
    <List itemLayout="vertical" style={{ padding: '0 30px' }}>
      <VirtualList
        data={data}
        itemKey="id"
        onScroll={onScroll}
        height={containerHeight}
        itemHeight={203}
        styles={{ verticalScrollBar: { width: 0 } }} //隐藏滚动条
      >
        {(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={<LikeOutlined />} text={item.like} key="like" />,
              <IconText icon={<StarOutlined />} text={item.collection} key="collection" />,
              <IconText icon={<MessageOutlined />} text={item.comment} key="comment" />
            ]}
            extra={
              <img
                width={250}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      </VirtualList>
    </List>
  )
}

export default ArticleList
