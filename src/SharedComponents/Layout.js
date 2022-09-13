import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        {/*Header*/}
        {/*Nav*/}
        <Outlet/>
        {/*Footer*/}
    </div>
  )
}

export default Layout