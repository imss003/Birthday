import React, { useState } from 'react';

const ImageCard = ({ path, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Thumbnail */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
        <img
          src={path}
          alt={text}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          onClick={openModal}
        />
        <div className="p-4 text-center">
          <p className="text-gray-800 font-semibold">{text}</p>
        </div>
      </div>

      {/* Full-Screen Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="max-w-4xl w-full p-4 relative">
            <img
              src={path}
              alt="Full"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-400"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCard;
