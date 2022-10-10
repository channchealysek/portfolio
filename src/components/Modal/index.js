import React from "react";

export default function Modal({ visible, onClose, messages }) {
  const handleOnClose = (e) => {
      if(e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
    id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
        flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded flex flex-col justify-center items-center shadow-slate-500">
        <div className="p-2 mb-5">{messages}</div>
        <button onClick={onClose} className="p-2 rounded bg-gray-400 shadow-md text-sm">Close</button>
      </div>
    </div>
  );
}
