import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Client from '../../pages/stories.admin'
import Product from '../../pages/categories.admin'
const MainContent = () => {
  return (
    <>
      <Header />
      <div id='main-content'>
        <Switch>
          <Route path='/admin/stories'>
            <Client />
          </Route>
          <Route path='/admin/categories'>
            <Product />
          </Route>
        </Switch>
      </div>
    </>
        )
        }

export default MainContent