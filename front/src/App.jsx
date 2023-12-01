import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Routes from '@/routes'
import AntdProvider from './AntdProvider'
import store from './store'

const App = () => {
  return (
    <ReduxProvider store={store}>
      <AntdProvider>
        <BrowserRouter basename="/">
          <Routes />
        </BrowserRouter>
      </AntdProvider>
    </ReduxProvider>
  )
}

export default App
