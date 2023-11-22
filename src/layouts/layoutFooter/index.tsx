'use client';

type TLayoutFooter = {
  children: any;
};

const LayoutFooter = (props: TLayoutFooter) => {
  return (
    <div className='min-h-[7rem]'>
      <div>{props.children}</div>
      <div>
        <div>
          <img src='/light/icons/profile_order' alt='' />
        </div>
        <div>
          <img src='/light/icons/profile_order' alt='' />
        </div>
        <div>
          <img src='/light/icons/profile_order' alt='' />
        </div>
        <div>
          <img src='/light/icons/profile_order' alt='' />
        </div>
        <div>
          <img src='/light/icons/profile_order' alt='' />
        </div>
      </div>
    </div>
  );
};

export { LayoutFooter };
