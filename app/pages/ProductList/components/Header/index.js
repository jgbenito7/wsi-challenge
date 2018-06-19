import React from 'react'
import { DebounceInput } from 'react-debounce-input'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

const Header = props => (
  <div className='product-list__header'>
    <div className='product-list__header-left-wrap'>
      <h1>Our Products Are Pretty Sweet</h1>
    </div>
    <div className='product-list__header-right-wrap'>
      <div className='product-list__input-wrap'>
        <DebounceInput
          className='product-list__search-input'
          debounceTimeout={300}
          onChange={props.onSearch}
          placeholder='Search Products...'
        />
        <Select
          name='sort-select'
          className='product-list__sort-select'
          clearable
          placeholder='Sort By...'
          onChange={props.onSort}
          value={props.sortValue}
          options={[
            { value: 'priceDsc', label: 'Price (High to Low)' },
            { value: 'priceAsc', label: 'Price (Low to High)' }
          ]}
        />
      </div>
    </div>
  </div>
)

Header.displayName = 'Header'

export default Header
