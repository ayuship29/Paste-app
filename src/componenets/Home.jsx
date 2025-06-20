import React ,{ useEffect, useState}from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updateToPaste } from '../redux/pasteSlice';
const Home = () => {
    const[title, setTitle] = useState("");
    const[value,setValue] =useState('');
     const [searchParams , setSearchParams]=useSearchParams();//to search paste
     const pasteId=searchParams.get("pasteId");
     const dispatch =useDispatch();
const allPastes = useSelector((state)=>state.paste.pastes);


  useEffect(() => {
     if(pasteId){
      const paste = allPastes.find((p) =>p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
     }
     
   }, [pasteId]);

     function createPaste(){
    const paste = {
      title:title,
      content:value,
      _id:pasteId ||
      Date.now().toString(36),
      createdAt:new Date().toISOString(),
    }

 
   
    if(pasteId){
      //update
      dispatch(updateToPaste(paste));
    }
    else
    { //create
   dispatch(addToPaste(paste));
    }
     //after creation or updation
     setTitle('');
     setValue('');
     setSearchParams({});
     }

  return (
   <div> 
    <div className='flex flex-row gap-7 place-content-between'>
      <input 
      className='pl-2 rounded-2xl mt-2 w-[67%] bg-gray-800 text-white'
      type="text"
       placeholder='Enter title here' 
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={createPaste} className='p-2 rounded-2xl mt-2  bg-gray-900'>{
        pasteId ? "Update My Paste" : "Create My Paste"}</button>
    </div>
    <div className='mt-9'>
        <textarea  className=' rounded-2xl mt-5 min-w-2xl p-5  bg-gray-800 text-white' value={value} placeholder='Enter content here'onChange={(e)=>setValue(e.target.value)}  rows={21}  ></textarea>
    </div>
    </div>
   
  )
}

export default Home
