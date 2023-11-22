'use client';

import '@helpers';
import Image from 'next/image';
import { MenuList, MenuItem } from '@components';
import { useRef } from 'react';

const Profile = () => {
  const menus = useRef([
    {
      title: 'Account',
      items: [
        {
          src: '/light/icons/profile_order.png',
          title: 'orders',
        },
        {
          src: '/light/icons/profile_return.png',
          title: 'returns',
        },
        {
          src: '/light/icons/profile_wishlist.png',
          title: 'wishlist',
        },
        {
          src: '/light/icons/profile_address.png',
          title: 'addresses',
          withBorder: false,
        },
      ],
    },
    {
      title: 'Settings',
      items: [
        {
          src: '/light/icons/profile_language.png',
          title: 'languages',
        },
        {
          src: '/light/icons/profile_location.png',
          title: 'locations',
        },
        {
          src: '/light/icons/profile_dark_light_mode.png',
          title: 'dark',
        },
      ],
    },
    {
      title: 'Help & Support',
      items: [
        {
          src: '/light/icons/profile_help.png',
          title: 'get help',
        },
        {
          src: '/light/icons/profile_faq.png',
          title: 'FAQ',
        },
      ],
    },
  ]);

  return (
    <div className='px-10 border-4 h-full'>
      {/* Shop InFo */}
      <div className='flex flex-row justify-between pt-16 pb-12 items-center h-fit'>
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
                  withBorder={item.withBorder}
                ></MenuItem>
              ))}
            </MenuList>
          </div>
        ))}
      </div>

      {/* Logout */}
      <div className='flex my-2 py-1 cursor-pointer'>
        <div>
          <img src='/light/icons/profile_logout.png' alt='' />
        </div>
        <div className='pl-1 text-danger-100 font-semibold'>Log out</div>
      </div>
    </div>
  );
};

export default Profile;
