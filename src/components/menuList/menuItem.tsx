import React from 'react';

type TMenuItemProps = {
  srcIcon: string;
  title: string;
  withBorder?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const MenuItem = (props: TMenuItemProps) => {
  const { srcIcon, title, withBorder = true, onClick } = props;
  return (
    <div
      className={`cursor-pointer flex w-full py-1 items-center ${withBorder ? 'border-b-1' : ''}`}
      onClick={onClick}
    >
      <div>
        <img src={srcIcon} alt='' />
      </div>
      <div className='flex-grow ml-1'>
        <p className='text-p font-medium'>{title.capitalizeEachWord()}</p>
      </div>
      <div className=''>
        <img src='/light/icons/profile_left_arrow.png' alt='' />
      </div>
    </div>
  );
};

export { MenuItem };
