
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components/view'

const OutletView = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default OutletView