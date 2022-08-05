import React, { FC, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header/Header'

const Layout: FC = () => {
  // const { pathname } = useLocation()
  // useEffect(() => {
  //   console.log(pathname)
  //   window.scrollTo(0, 0)
  // }, [pathname])

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout