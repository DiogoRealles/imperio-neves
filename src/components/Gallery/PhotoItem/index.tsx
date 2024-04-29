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
      className={`relative w-full h-full cursor-pointer hover:opacity-80 col-span-${colSpan} row-span-${rowSpan} rounded-[6px] overflow-hidden`}
    >
      <Image className="" src={`/assets/img/${photo.img_url}`} alt="" fill />
    </div>
  );
};

export default Index;
