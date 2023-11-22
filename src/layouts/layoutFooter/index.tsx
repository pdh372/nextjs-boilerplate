'use client';

type TLayoutFooter = {
  children: any;
};

const LayoutFooter = (props: TLayoutFooter) => {
  return (
    <div className='flex flex-col items-center bg-white text-sm sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl m-auto h-screen'>
      <div className='w-full flex-grow overflow-auto'>{props.children}</div>
      <div className='w-full flex justify-between items-center py-0.5 px-1 border-t-2 y lg:px-1.5 lg:border-t-4'>
        <div className='cursor-pointer p-0.5 lg:p-1'>
          <img src='/light/icons/profile_order.png' alt='' />
        </div>
        <div className='cursor-pointer p-0.5 lg:p-1'>
          <img src='/light/icons/profile_order.png' alt='' />
        </div>
        <div className='cursor-pointer p-0.5 lg:p-1'>
          <img src='/light/icons/profile_order.png' alt='' />
        </div>
        <div className='cursor-pointer p-0.5 lg:p-1'>
          <img src='/light/icons/profile_order.png' alt='' />
        </div>
        <div className='cursor-pointer p-0.5 lg:p-1'>
          <img src='/light/icons/profile_order.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export { LayoutFooter };
