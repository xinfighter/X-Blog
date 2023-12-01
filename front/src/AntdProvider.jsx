import { useSelector } from 'react-redux'
import { App, ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

// import dayjs from 'dayjs'
// import 'dayjs/locale/zh-cn';
// dayjs.locale('zh-cn');

const lightTheme = {
  token: {},
  components: {
    Layout: {
      headerBg: '#ffffff',
      headerPadding: '0'
    }
  }
}

const darkTheme = {
  token: {},
  components: {
    Layout: {
      headerBg: '#1b1b1f',
      headerPadding: '0'
    }
  }
}

const AntdProvider = ({ children }) => {
  const dark = useSelector((state) => state.theme.dark)
  const theme = dark ? darkTheme : lightTheme

  return (
    <ConfigProvider locale={zhCN} componentSize={'middle'} theme={theme}>
      <App>{children}</App>
    </ConfigProvider>
  )
}

export default AntdProvider
