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
    <div
      className="container mx-auto"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="300"
    >
      <div className="bg-whit p-3 grid md:grid-cols-4 gap-3 w-full h-[700px] rounded-[18px]">
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
