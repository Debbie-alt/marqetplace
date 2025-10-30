'use client'
import React, { useState } from 'react'
import Sidebar from '@/app/components/uploadpage/Sidebar'
import TopBar from '@/app/components/uploadpage/Topbar'
import ProductUploadForm from '@/app/components/uploadpage/AddProductForm'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/Authcontext'

const SellerUploadPage = () => {
  const { user } = useAuth()
  const router = useRouter()

  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (!user) {
    router.push('/signin')
    return null
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-md transform 
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:static lg:shadow-none`}
      >
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-y-auto">
        <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="p-4">
          <ProductUploadForm />
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default SellerUploadPage
