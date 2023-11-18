import Link from 'next/link';
import type { ReactNode } from 'react';


type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className='w-full px-1 text-gray-700 antialiased'>
    <Link href={'/onboarding'}>onboarding</Link>
  </div>
);

export { Main };
