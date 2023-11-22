type TMenuItemProps = {
  srcIcon: string;
  title: string;
  withBorder?: boolean;
};

const MenuItem = (props: TMenuItemProps) => {
  const { srcIcon, title, withBorder = true } = props;
  return (
    <div className={`flex w-full py-1 items-center ${withBorder ? 'border-b-1' : ''}`}>
      <div>
        <img src={srcIcon} alt='' />
      </div>
      <div className='flex-grow ml-1'>
        <p className='text-p font-medium'>{title.capitalizeEachWord()}</p>
      </div>
      <div className='cursor-pointer'>
        <img src='/light/icons/profile_left_arrow.png' alt='' />
      </div>
    </div>
  );
};

export { MenuItem };
