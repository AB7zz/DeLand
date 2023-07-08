import React from 'react'
import Sidebar from '../components/Dashboard/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import View from '../components/Dashboard/View'
import Upload from '../components/Dashboard/Upload'
import Requests from '../components/Dashboard/Requests'
import Requested from '../components/Dashboard/Requested'

const DashboardPage = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <Routes>
            <Route path='/view' element={<View />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/requests' element={<Requests />} />
            <Route path='/requested' element={<Requested />} />
        </Routes>
    </div>

  )
}

export default DashboardPage