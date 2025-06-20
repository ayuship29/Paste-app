import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RemovefromPaste } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import {
  Pencil, // Edit
  Eye,    // View
  Trash2, // Delete
  Copy,   // Copy
  Share2  // Share
} from 'lucide-react';


const Paste = () => {
  const pastes = useSelector((state) =>
    state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(
      searchTerm.toLowerCase()
    )
  )
  function handelDelete(pasteId) {
    dispatch(RemovefromPaste(pasteId));
  }
  return (
    <div>
      <input className='p-2 rounded-2xl min-w-[600px] mt-3  bg-gray-800 text-white'
        type="text" placeholder='Search Title'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
      <div className='flex flex-col gap-8 text-white mt-9'>
      <h2 className='text-2xl font-bold text-left ml-5'>✏️ ALL PASTES . . .</h2>
        {filteredData.length > 0 && filteredData.map((paste) => {
          return (
            <div className='border  felx rounded p-2 shadow shadow-blue-50' key={paste?._id}>
              <div className=' bg-gray-800 text-white font-bold text-2xl p-1'>
                {paste.title}
              </div>
              <div className='p-5 font-stretch-50% text-pink-200'>
                {paste.content}
              </div>
              <div className='flex  flex-row gap-3 place-content-evenly bg-gray-800 text-white p-3 m-3'>

                <a href={`/?pasteId=${paste?._id}`} className='hover:text-blue-400 flex items-center gap -2' ><Pencil size={18} /> Edit</a>

                {/* View */}


                <a href={`/pastes/${paste?._id}`} className='hover:text-blue-400 flex items-center gap -2'> <Eye size={18} /> View
                </a>

                {/* Delete */}
                <a onClick={() => handelDelete
                  (paste?._id)
                } className=' flex items-center gap -2 cursor-pointer'> <Trash2 size={18} />Delete</a>

                <a onClick={() => {
                  navigator.clipboard.writeText(paste?.content);
                  toast.success("copies to clipboard")
                }
                } className='cursor-pointer hover:text-yellow-400 flex items-center gap-1'> <Copy size={18} />Copy</a>

                <a
                  onClick={() => {
                    const url = `${window.location.origin}/pastes/${paste._id}`;
                    navigator.clipboard.writeText(url);
                    toast.success("Link copied!");
                  }}
                  className='cursor-pointer hover:text-purple-800 flex items-center gap-1'
                >
                  <Share2 size={18} />
                  Share
                </a>
                <div className="text-sm text-yellow-200 italic">
  Created at: {new Date(paste.createdAt).toLocaleString()}
</div>

              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}


export default Paste
