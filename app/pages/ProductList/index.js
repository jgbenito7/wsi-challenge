import React from 'react'
import productData from 'assets/json/data.json'
import { Product } from './components'
import * as PageComponents from '../components'

class ProductList extends React.Component {
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
        <PageComponents.Header />
        <PageComponents.Body>
          <div className='product-list'>
            {this.state.productData.groups.map((item, i) => (
              <Product key={i} item={item} />
            ))}
          </div>
        </PageComponents.Body>
      </React.Fragment>
    )
  }
}

ProductList.displayName = 'ProductList'

export default ProductList

// --------------------------------------------------------------------- private

function fetchProductData () {
  // I was going to put a get request here,
  // but the url doesnt have access headers set
}
