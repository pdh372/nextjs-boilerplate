'use client';

import Image from 'next/image';
import { useState } from 'react';
import { OnboardingLayout } from "@/layouts/onboarding.layout";

const Onboarding =  () => {
  const [pages] = useState([
    {
      skip: 'light',
    },
    {
      skip: 'light',
    },
  ]);

  // const [currentPage, setCurrent] = useState(0)

  return (
    <div></div>

    
  );
};

export const dynamic = 'force-dynamic';

export default Onboarding;
