import React from 'react'
import WSILogo from 'assets/images/wsi-logo.svg'

const Header = () => (
  <div className='header'>
    <img className='header__logo' src={WSILogo} alt='William Sonoma Logo' />
  </div>
)

Header.displayName = 'Header'

export default Header
