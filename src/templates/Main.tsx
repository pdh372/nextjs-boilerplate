import Link from 'next/link';
import type { ReactNode } from 'react';

type IMainProps = {
  meta?: ReactNode;
  children?: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className='w-full px-1 text-gray-700 antialiased'>
    <div>
      <Link href={'/onboarding'}>onboarding</Link>
    </div>
    <div>
      <Link href={'/profile'}>profile</Link>
    </div>
  </div>
);

export { Main };
