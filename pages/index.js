import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './redux/store'

import Header from './comps/header'
import Profile from './src/profile'

const Index = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-sm-4">
            <Profile />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default Index