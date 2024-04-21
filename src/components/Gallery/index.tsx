'use client';

import { photoList } from '@/data/photoList';
import PhotoItem from './PhotoItem';
import { useState } from 'react';
import Modal from './Modal';

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState('');

  const openModal = (id: number) => {
    const photo = photoList.find((item) => item.id === id);

    if (photo) {
      setImageOfModal(photo.img_url);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto">
      <div className="bg-white p-3 grid md:grid-cols-4 gap-3 w-full h-[700px]">
        {photoList.map((item) => (
          <PhotoItem
            key={item.id}
            photo={item}
            colSpan={item.colSpan}
            rowSpan={item.rowSpan}
            onClick={() => openModal(item.id)}
          />
        ))}
      </div>

      {showModal && <Modal image={imageOfModal} closeModal={closeModal} />}
    </div>
  );
};

export default Index;
