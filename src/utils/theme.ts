import { log } from 'console';

export const ThemeTypeImage = (pathImage: string, type: string) => {
  log(type);
  return `dark/${pathImage}`;
};
