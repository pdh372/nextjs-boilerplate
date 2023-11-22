import { useEffect, useState } from 'react';

type TThemeImageProps = {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
};

enum ThemeMode {
  DARK = 'dark',
  LIGHT = 'light',
}

const getThemeImagePath = (path: string, theme: ThemeMode.LIGHT | ThemeMode.DARK): string => {
  return `/${theme}${path}`;
};

const ThemeImage = (props: TThemeImageProps) => {
  const { src, alt, style, className } = props;
  // const [theme, setTheme] = useState<ThemeMode.DARK | ThemeMode.LIGHT>(ThemeMode.LIGHT);

  // useEffect(() => {
  //   const updateTheme = () => {
  //     setTheme(
  //       window.matchMedia('(prefers-color-scheme: dark)').matches
  //         ? ThemeMode.DARK
  //         : ThemeMode.LIGHT,
  //     );
  //   };

  //   updateTheme();
  //   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);

  //   return () => {
  //     window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateTheme);
  //   };
  // }, []);

  const path = getThemeImagePath(src, ThemeMode.LIGHT);

  return <ThemeImage src={path} alt={alt} style={style} className={className} />;
};

export { ThemeImage };
