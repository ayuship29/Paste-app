import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);

  if (!paste) {
    return <div className="p-5 text-red-500">Paste not found.</div>;
  }

  return (
    <div className="p-5">
      <div className="flex flex-row gap-7 justify-between mb-5">
        <input
          className="pl-2 rounded-2xl w-[67%] bg-gray-800 text-white"
          type="text"
          value={paste.title}
          disabled
        />
      </div>
      <textarea
        className="rounded-2xl w-full p-5 bg-gray-800 text-white"
        value={paste.content}
        disabled
        rows={21}
      ></textarea>
    </div>
  );
};

export default ViewPaste;

