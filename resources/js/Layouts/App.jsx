import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { Head, usePage } from '@inertiajs/inertia-react'
import toast, { Toaster } from 'react-hot-toast'

export default function App({ children, title }) {
  const { flash } = usePage().props

  flash.type && toast[flash.type](flash.message)

  return (
    <div>
      <Head title={title}/>
      <Navbar/>
      <Toaster position="bottom-right"/>
      <div className="my-4">
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  )
}
