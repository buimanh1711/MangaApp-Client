import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Story from '../../pages/stories.admin'
import Category from '../../pages/categories.admin'
const MainContent = () => {
  return (
    <>
      <Header />
      <div id='main-content'>
        <Switch>
          <Route path='/admin/stories'>
            <Story />
          </Route>
          <Route path='/admin/categories'>
            <Category />
          </Route>
        </Switch>
      </div>
    </>
        )
        }

export default MainContent