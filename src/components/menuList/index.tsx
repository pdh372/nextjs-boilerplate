import { MenuItem } from './menuItem';

type TMenuListProps = {
  title: string;
  children: React.ReactElement<typeof MenuItem>[] | React.ReactElement<typeof MenuItem>;
};

const MenuList = (props: TMenuListProps) => {
  const { title } = props;
  return (
    <div className='mt-2'>
      <div className='pb-1'>
        <h2 className='text-h5 font-semibold'>{title.capitalizeEachWord()}</h2>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export { MenuList, MenuItem };
