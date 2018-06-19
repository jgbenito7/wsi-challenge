import React from 'react'
import { Product } from './components'

const ProductList = props => (
  <div className='product-list'>
    {props.productData.groups.map((item, i) => <Product key={i} item={item} />)}
  </div>
)

ProductList.displayName = 'ProductList'

export default ProductList
