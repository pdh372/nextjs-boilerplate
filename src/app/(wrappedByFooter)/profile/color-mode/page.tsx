'use client';

import '@helpers';
import Image from 'next/image';
import { MenuList, MenuItem } from '@components';
import { useRef } from 'react';
import { COLOR_MODE, GLOBAL_DATA, LOCAL_STORAGE } from '@constants';
const Profile = () => {
  const handleColorMode = (theme: string) => {
    localStorage.setItem(LOCAL_STORAGE.COLOR_MODE, theme);
    document.documentElement.setAttribute(GLOBAL_DATA.THEME, theme);
  };

  const menus = useRef<React.IProfileMenuItemRef[]>([
    {
      title: 'Mode',
      items: [
        {
          src: '/light/icons/profile_order.png',
          title: 'dark',
          metadata: {
            arrowIcon: <div></div>,
            onClick: () => handleColorMode(COLOR_MODE.DARK),
          },
        },
        {
          src: '/light/icons/profile_return.png',
          title: 'light',
          metadata: {
            arrowIcon: <div></div>,
            onClick: () => handleColorMode(COLOR_MODE.LIGHT),
          },
        },
      ],
    },
  ]);

  return (
    <div className='px-10'>
      {/* Shop InFo */}
      <div className='flex flex-row justify-between pt-2 pb-12 items-center h-fit'>
        <div className='cursor-pointer'>
          <h2 className='font-semibold text-2xl'>Shoplon</h2>
        </div>
        <div className='cursor-pointer'>
          <img className='object-contain min-h-full' src='/light/icons/profile_search.png' alt='' />
        </div>
      </div>

      {/* User Info */}
      <div className='flex items-center mb-10'>
        <div className='max-h-[60px] max-w-[60px]'>
          <img className='object-contain' src='/example/avt.png' alt='' />
        </div>
        <div className='flex-grow pl-4 flex justify-evenly items-start flex-col max-h-full h-15'>
          <h2 className='text-sm font-semibold pb-[2.5px]'>Hi, Sepide</h2>
          <p className='text-sm font-medium text-[color:var(--light-black-black-39,#999)] pt-[2.5px]'>
            Sepide@piqo.design
          </p>
        </div>
        <div className='cursor-pointer'>
          <Image src='/light/icons/profile_left_arrow.png' alt='' width={20} height={20} />
        </div>
      </div>

      {/* Menu */}
      <div>
        {menus.current.map((menu, i) => (
          <div className='' key={i}>
            <MenuList title={menu.title}>
              {menu.items.map((item, j) => (
                <MenuItem
                  key={j}
                  srcIcon={item.src}
                  title={item.title}
                  withBorder={item.withBorder || false}
                  metadata={item.metadata}
                ></MenuItem>
              ))}
            </MenuList>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
