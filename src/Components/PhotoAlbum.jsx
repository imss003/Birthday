import React from 'react';
import ImageCard from './ImageCard';

const images = [
  { path: "/img1.jpg", text: "One of the first pics jo tumne mujhe bheji thi" },
  { path: "/saree.jpg", text: "One of my most favourite pic" },
  { path: "/shadi.jpg", text: "Shadi ke baad aise hi pehen na hoga 😁" }
];

const PhotoAlbum = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-4xl sm:text-5xl font-bold underline text-yellow-600 mb-8">
        Photo Album
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <ImageCard key={index} path={image.path} text={image.text} />
        ))}
      </div>
    </div>
  );
};

export default PhotoAlbum;
