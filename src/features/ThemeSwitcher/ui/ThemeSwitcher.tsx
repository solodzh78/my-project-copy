import { FC } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';

import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className = '' } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames([s.themeswitcher, className])}
      onClick={toggleTheme}
      theme="clear"
    >
      {theme === 'dark' ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
