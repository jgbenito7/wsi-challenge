import React from 'react'
import * as R from 'ramda'
import productData from 'assets/json/data.json'
import { Product, Header } from './components'
import * as PageComponents from '../components'

class ProductList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      productData,
      filterParams: {
        search: '',
        sortBy: ''
      }
    }

    this.fetchProductData = fetchProductData.bind(this)

    this.updateSearch = ({ target }) =>
      this.setState(R.set(R.lensPath(['filterParams', 'search']), target.value))

    this.updateSort = sort =>
      this.setState(R.set(R.lensPath(['filterParams', 'sortBy']), sort))
  }

  componentDidMount () {
    this.fetchProductData()
  }

  render () {
    const { filterParams, productData } = this.state
    const filteredGroups = filterByParams(filterParams, productData.groups)

    return (
      <React.Fragment>
        <PageComponents.Header />
        <PageComponents.Body>
          <div className='product-list'>
            <Header
              onSearch={this.updateSearch}
              onSort={this.updateSort}
              sortValue={this.state.filterParams.sortBy}
            />
            <div className='product-list__items'>
              {filteredGroups.map((item, i) => <Product key={i} item={item} />)}
            </div>
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

function filterBySearch (search) {
  return groups => {
    if (!search) {
      return groups
    }

    return groups.reduce((acc, group) => {
      const regex = new RegExp(search, 'gi')

      if (regex.test(group.name)) {
        const highlightedName = group.name.replace(
          regex,
          match => `<mark>${match}</mark>`
        )

        return [...acc, R.merge(group, { name: highlightedName })]
      }

      return acc
    }, [])
  }
}

function getPrice (item) {
  return R.pathOr(0, ['priceRange', 'selling', 'high'], item)
}

function arrangeBySort (sort) {
  return groups => {
    if (!sort) {
      return groups
    }

    return R.sort((a, b) => {
      const aPrice = getPrice(a)
      const bPrice = getPrice(b)

      if (sort === 'priceAsc') {
        return aPrice - bPrice
      } else if (sort === 'priceDsc') {
        return bPrice - aPrice
      }
    }, groups)
  }
}

function filterByParams (filterParams, groups) {
  const sortBy = R.pathOr(null, ['sortBy', 'value'], filterParams)

  return R.compose(filterBySearch(filterParams.search), arrangeBySort(sortBy))(
    groups
  )
}
