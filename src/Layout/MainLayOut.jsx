import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function MainLayOut() {
  return (
    <div className='flex flex-col h-lvw'>
      <Header />



        <main className=' flex-1'>
            <Outlet />
        </main>



        <Footer />
    </div>
  )
}

export default MainLayOut
