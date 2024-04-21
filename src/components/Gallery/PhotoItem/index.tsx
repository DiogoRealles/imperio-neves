import { Photo } from '@/types/Photo';
import Image from 'next/image';

type Props = {
  photo: Photo;
  onClick: () => void;
  colSpan?: number;
  rowSpan?: number;
};

const Index = ({ photo, onClick, colSpan, rowSpan }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`relative w-full h-full cursor-pointer hover:opacity-80 col-span-${colSpan} row-span-${rowSpan}`}
    >
      <Image
        className="w-full h-full object-cover align-middle"
        src={`/assets/img/${photo.img_url}`}
        alt=""
        fill
      />
    </div>
  );
};

export default Index;
