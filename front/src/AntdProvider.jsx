import { useSelector } from 'react-redux'
import { App, ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

// import dayjs from 'dayjs'
// import 'dayjs/locale/zh-cn';
// dayjs.locale('zh-cn');

const lightTheme = {
  token: {
    colorPrimary: '#3451b2',
    colorTextBase: '#3c3c43',
    colorBgBase: '#ffffff'
  },
  components: {
    Layout: {
      headerBg: '#ffffff',
      headerPadding: '0'
    },
    Divider: {
      colorSplit: '#e2e2e3',
      colorText: '#e2e2e3'
    }
  }
}

const darkTheme = {
  token: {
    colorPrimary: '#9499ff',
    colorTextBase: '#fffff5db',
    colorBgBase: '#1b1b1f'
  },
  components: {
    Layout: {
      headerBg: '#1b1b1f',
      headerPadding: '0'
    },
    Divider: {
      colorSplit: '#e2e2e3',
      colorText: '#e2e2e3'
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
