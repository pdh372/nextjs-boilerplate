'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useRef } from 'react';
import { ROUTES } from '@constants';

type TLayoutFooter = {
  children: any;
};

const LayoutFooter = (props: TLayoutFooter) => {
  const footersRef = useRef([
    {
      inactivated: '/light/svg/footer_shop.svg',
      activated: '/light/svg/footer_shop_activated.svg',
      title: 'shop',
      redirect: ROUTES.TEST_1,
    },
    {
      inactivated: '/light/svg/footer_discover.svg',
      activated: '/light/svg/footer_discover_activated.svg',
      title: 'Discover',
      redirect: ROUTES.TEST_2,
    },
    {
      inactivated: '/light/svg/footer_bookmark.svg',
      activated: '/light/svg/footer_bookmark_activated.svg',
      title: 'Bookmark',
      redirect: ROUTES.TEST_3,
    },
    {
      inactivated: '/light/svg/footer_cart.svg',
      activated: '/light/svg/footer_cart_activated.svg',
      title: 'Cart',
      redirect: ROUTES.TEST_4,
    },
    {
      inactivated: '/light/svg/footer_profile.svg',
      activated: '/light/svg/footer_profile_activated.svg',
      title: 'Profile',
      redirect: ROUTES.PROFILE,
    },
  ]);

  const router = useRouter();
  const pathname = usePathname() || '';

  const handleClickFooterItem = (path: string) => {
    const currentFooter = footersRef.current.find(item => item.redirect === path);
    if (currentFooter) {
      router.push(currentFooter.redirect);
    }
  };

  return (
    <div className='flex flex-col items-center text-sm sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-screen overflow-hidden'>
      <div className='w-full flex-grow overflow-auto item'>{props.children}</div>
      <div className='w-full flex justify-evenly items-center py-0.5 px-1 border-t-2 y lg:px-1.5 lg:border-t-4'>
        {footersRef.current.map((f, index) => {
          const isActivated = new RegExp(`^${f.redirect}`).test(pathname);

          return (
            <div
              key={index}
              className='flex flex-col justify-between items-center cursor-pointer lg:p-1 relative min-w-[4.5rem]'
              onClick={() => handleClickFooterItem(f.redirect)}
            >
              <div
                className={`left-[50%] -translate-x-[50%] absolute w-[4.5rem] min-h-[100px] bg-red-200 rounded-t-[40%] -top-[4px] transition-translate duration-500 ease-in-out ${
                  isActivated ? 'translate-y-[0px]' : 'translate-y-[100px]'
                }`}
              ></div>
              <div className='min-w-2 transition-all z-10 flex items-center justify-center'>
                <img src={isActivated ? f.activated : f.inactivated} alt='' />
              </div>
              <div
                className={`mt-0.5 transition-translate duration-500 ease-in-out text-purple-100 ${
                  isActivated ? 'translate-y-[0px]' : 'translate-y-[100px]'
                }`}
              >
                {f.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { LayoutFooter };
