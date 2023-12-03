import { useDispatch } from 'react-redux'
import { ConfigProvider, Switch } from 'antd'
import IconFont from '@/components/IconFont.jsx'
import { setTheme } from '@/store/features/themeSlice.js'

const ThemeSwitch = () => {
  const dispatch = useDispatch()

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
        checkedChildren={<IconFont type="icon-dark" />}
        unCheckedChildren={<IconFont type="icon-light" />}
        style={{
          backgroundColor: '#65758529',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: '#3c3f44'
        }}
      />
    </ConfigProvider>
  )
}

export default ThemeSwitch
