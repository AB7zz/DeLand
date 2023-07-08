import React from 'react'

const Upload = () => {
  return (
    <div className='py-5 px-10'>
      <h1 className='text-2xl text-center'> Upload</h1>
      <div className='grid grid-cols-1 mt-10'>
        <div>
          <label>Select Type</label>
          <select className='rounded-[15px] px-5 py-2 border border border-slate-500 w-full'>
            <option value="">--Select Type--</option>
            <option value="0">Property</option>
            <option value="1">Land</option>
          </select>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4 mt-5'>
        <div>
          <label htmlFor="">Title</label>
          <input className='rounded-[15px] px-5 py-2 border border border-slate-500 w-full' type="text" placeholder="Enter title" />
        </div>
        <div>
          <label htmlFor="">Enter Size (sqft)</label>
          <input className='rounded-[15px] px-5 py-2 border border border-slate-500 w-full' type="number" placeholder="1000" />
        </div>
      </div>
      <div className='grid grid-cols-1 mt-5'>
        <div>
          <label>Address</label>
          <textarea name="" id="" className='rounded-[15px] px-5 py-2 border border border-slate-500 w-full' cols="30" rows="10"></textarea>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 mt-5'>
        <div>
          <label htmlFor="">Thumbnail Image</label>
          <input type="file" name="" className='rounded-[15px] px-5 py-2 border border border-slate-500 w-full' id="" />
        </div>
        <div>
          <label htmlFor="">Leagl Document</label>
          <input type="file" name="" className='rounded-[15px] px-5 py-2 border border border-slate-500 w-full' id="" />
        </div>
      </div>
      <button className='bg-blue-800 text-white text-center w-[100%] rounded-[15px] py-3 mt-10 hover:bg-blue-700'>Upload</button>
    </div>
  )
}

export default Upload