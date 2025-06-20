import React ,{ useEffect, useState}from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updateToPaste } from '../redux/pasteSlice';

const ViewPaste = () => {
  const {id}= useParams();
  const allPastes =useSelector((state) => state.paste.pastes);

  const paste =allPastes.filter((p) => p._id===id)[0];

  return (
    <div>
     <div> 
    <div className='flex flex-row gap-7 place-content-between'>
      <input 
      className='pl-2 rounded-2xl mt-2 w-[67%] bg-gray-800 text-white'
      type="text"
       placeholder='Enter title here' 
      value={paste.title}
      disabled
      onChange={(e) => setTitle(e.target.value)}
      />
      {/* <button onClick={createPaste} className='p-2 rounded-2xl mt-2  bg-gray-900'>{
        pasteId ? "Update My Paste" : "Create My Paste"}</button> */}
    </div>
    <div className='mt-9'>
<<<<<<< HEAD
        <textarea  className=' rounded-2xl mt-5 min-w-2xl p-5  bg-gray-800 text-white' value={paste.content} disabled placeholder='Enter content here'onChange={(e)=>setValue(e.target.value)}  rows={21}  ></textarea>
=======
        <textarea  className=' rounded-2xl mt-5 min-w-2xl p-5  bg-gray-800 text-white' value={paste.value} disabled placeholder='Enter content here'onChange={(e)=>setValue(e.target.value)}  rows={21}  ></textarea>
>>>>>>> 7d81b49 (Initial Setup Complete)
    </div>
    </div>
   
  
    </div>
  )
}

export default ViewPaste
