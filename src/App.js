import { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './static/styles/common.css'
import './static/styles/global.scss'
import './static/styles/sign.scss'
import './static/styles/home.scss'
import './static/styles/stories.scss'
import './static/styles/story.admin.scss'
import './static/styles/category.admin.scss'
import './static/styles/template.scss'
import './static/styles/responsive.admin.scss'
import './static/styles/header.admin.scss'
import './static/styles/sidebar.admin.scss'
import './static/styles/story.admin.scss'
import './static/styles/category.admin.scss'
import './static/styles/responsive.scss'

import MainLayout from './layouts/main'
import Home from './pages/home'
import Stories from './pages/stories'
import Login from './layouts/sign/Login'
import Register from './layouts/sign/Register'
import Search from './pages/search'
import { authAsync } from './redux/actions/authen.actions'
import Admin from './layouts/admin'
import { getAllCategoriesAsync } from './redux/actions/categories.actions'
import { getAllStoriesAsync } from './redux/actions/stories.action'

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(authAsync())
  }, [])

  useEffect(() => {
    dispatch(getAllCategoriesAsync({}))
  }, [])

  useEffect(() => {
    dispatch(getAllStoriesAsync({}))
  }, [])

  return (
    <div className='my-app'>
      <Switch>
        <Route path='/search'>
          <MainLayout>
            <Search />
          </MainLayout>
        </Route>
        <Route path='/stories'>
          <MainLayout>
            <Stories />
          </MainLayout>
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/'>
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>
      </Switch>
    </div>
  )
}

export default App
