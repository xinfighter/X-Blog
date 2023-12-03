import { useNavigate } from 'react-router-dom'
import { Button, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const UserButton = () => {
  const items = [
    {
      key: 'personalCenter',
      label: '个人中心'
    },
    {
      key: 'setting',
      label: '设置'
    },
    {
      key: 'logout',
      label: '退出登录'
    }
  ]
  const navigate = useNavigate()

  const onClick = ({ key }) => {
    navigate(key)
  }
  return (
    <Dropdown
      menu={{
        items,
        onClick
      }}
      placement="bottom"
      arrow
    >
      <Button type="text" shape="circle" icon={<UserOutlined style={{ fontSize: '22px' }} />} />
    </Dropdown>
  )
}

export default UserButton
