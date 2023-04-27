import React from 'react';
import classNames from 'classnames';
import { useLocalStorage } from 'usehooks-ts';

export const WithTheme = ({ children }) => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', prefersDark || false);

  const toggleTheme = () => {
    setDarkTheme((prevValue) => !prevValue);
  };

  const component = React.cloneElement(children, { toggleTheme });

  return (
    <div
      className={classNames({
        dark: isDarkTheme,
      })}
    >
      {component}
    </div>
  );
};
