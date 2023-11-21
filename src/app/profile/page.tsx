'use client';

import Image from 'next/image';

const Profile = () => {
  return (
    <div className='px-10'>
      <div className='flex flex-row justify-between pt-16 pb-14 items-center'>
        <div>
          <h2 className='font-semibold text-2xl'>Shoplon</h2>
        </div>
        <div>
          <input type='text' />
        </div>
      </div>
      <div className='flex items-center'>
        <div className='max-h-[60px] max-w-[60px]'>
          <img className='object-contain' src='/example/avt.png' alt='' />
        </div>
        <div className='flex-grow pl-4 flex justify-evenly items-start flex-col max-h-full h-15'>
          <h2 className='text-sm font-semibold'>Hi, username</h2>
          <p className='text-sm font-medium text-[color:var(--light-black-black-40,#999)]'>
            email@gmail.com
          </p>
        </div>
        <div className='cursor-pointer'>
          <Image src='/light/icons/left_arrow.png' alt='' width={20} height={20} />
        </div>
      </div>
      <div className='text-h1'></div>
    </div>
  );
};

export default Profile;
