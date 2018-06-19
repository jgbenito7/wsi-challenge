import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import * as Components from './components'
import * as Pages from './pages'
import productData from '../data.json'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      productData
    }

    this.fetchProductData = fetchProductData.bind(this)
  }

  componentDidMount () {
    this.fetchProductData()
  }

  render () {
    return (
      <React.Fragment>
        <Components.Header />
        <Components.Body>
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Pages.ProductList
                  {...props}
                  productData={this.state.productData}
                />
              )}
            />
          </Switch>
        </Components.Body>
      </React.Fragment>
    )
  }
}

// --------------------------------------------------------------------- private

function fetchProductData () {
  // I was going to put a get request here,
  // but the url doesnt have access headers set
}
