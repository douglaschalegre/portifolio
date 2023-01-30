import Image from 'next/image';

export function Card({ img, alt, title, text }: any) {
  return (
    <div className='rounded animate-border inline-block from-pink-500 via-red-500 to-yellow-500 bg-[length:400%_400%] p-1 bg-gradient-to-r'>
      <div className='rounded p-5 h-80 bg-slate-50 text-neutral-900 max-w-[224px] flex items-center flex-col'>
        <Image
          src={img}
          width='60'
          height={'60'}
          alt={alt}
          className='rounded'
        />
        <h3 className='mt-3 font-bold'>{title}</h3>
        <p className='mt-8'>{text}</p>
      </div>
    </div>
  );
}
