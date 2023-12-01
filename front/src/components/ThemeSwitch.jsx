import { useDispatch, useSelector } from 'react-redux'
import { ConfigProvider, Switch } from 'antd'
import { setTheme } from '@/store/features/themeSlice.js'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

const ThemeSwitch = () => {
  const dispatch = useDispatch()
  const dark = useSelector((state) => state.theme.dark)
  console.log(dark)

  const handleChange = () => {
    dispatch(setTheme())
  }
  return (
    <ConfigProvider
      theme={{
        components: {
          Switch: {
            handleSize: 0
          }
        }
      }}
    >
      <Switch
        onChange={handleChange}
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        style={{
          backgroundColor: dark ? '#1c1b21' : '#eff0f3',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: dark ? '#3c3f44' : '#c2c2c4'
        }}
      />
    </ConfigProvider>
  )
}

export default ThemeSwitch
