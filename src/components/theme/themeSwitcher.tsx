'use client';

import { useEffect, useState } from 'react';
import { LOCAL_STORAGE, GLOBAL_DATA, COLOR_MODE } from '@constants';

type TThemeImageProps = {
  children: any;
};

// enum EThemeMode {
//   DARK = 'dark',
//   LIGHT = 'light',
// }

const ThemeSwitcher = (props: TThemeImageProps) => {
  useEffect(() => {
    document.documentElement.setAttribute(
      GLOBAL_DATA.THEME,
      localStorage.getItem(LOCAL_STORAGE.COLOR_MODE) || COLOR_MODE.LIGHT,
    );
  }, []);

  return props.children;
};

export { ThemeSwitcher };
