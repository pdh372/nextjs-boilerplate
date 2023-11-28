import React from 'react';

type TMenuItemProps = {
  srcIcon: string;
  title: string;
  withBorder?: boolean;
  metadata?: any;
};

const MenuItem = (props: TMenuItemProps) => {
  const { srcIcon, title, withBorder = true, metadata } = props;
  return (
    <div
      className={`cursor-pointer flex w-full py-1 items-center ${withBorder ? 'border-b-1' : ''}`}
      onClick={metadata?.onClick}
    >
      <div>
        <img src={srcIcon} alt='' />
      </div>
      <div className='flex-grow ml-1'>
        <p className='text-p font-medium'>{title.capitalizeEachWord()}</p>
      </div>

      {/* arrow icon */}
      {metadata?.arrowIcon ? (
        metadata.arrowIcon
      ) : (
        <div className=''>
          <img src='/light/icons/profile_left_arrow.png' alt='' />
        </div>
      )}
    </div>
  );
};

export { MenuItem };
