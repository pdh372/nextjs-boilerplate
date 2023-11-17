import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Onboarding',
  description: 'An example of CRUD operation',
};

const Onboarding = async () => {
  return (
    <main className=''>
      <div className='flex flex-row-reverse px-4 py-12'>
        <button
          type='button'
          className='p-3 text-center text-sm font-semibold  not-italic leading-[normal] text-[color:var(--light-black-black-100,#000)] hover:text-gray-900'
        >
          Skip
        </button>
      </div>

      <div className='flex items-center justify-center'>
        <Image src='/light/images/onboarding_finger.png' alt='' height={250} width={250} />
      </div>

      <div className='px-4'>
        <h2 className='pt-20 text-center text-[32px] font-semibold not-italic leading-[normal] text-[color:var(--light-black-black-100,#000)]'>
          Find the item you’ve been looking for
        </h2>

        <p className='pt-4 text-center text-sm font-normal not-italic leading-[140%] text-[color:var(--light-black-black-40,#999)]'>
          Here you’ll see rich varieties of goods, carefully classified for seamless browsing
          experience.
        </p>
      </div>

      <div>123</div>
    </main>
  );
};

export const dynamic = 'force-dynamic';

export default Onboarding;
