import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as Pages from '../pages'

const Root = () => {
  console.log('i am root')
  return (
    <Router>
      <Switch>
        <Route path='/' component={Pages.ProductList} exact />
      </Switch>
    </Router>
  )
}

export default Root
