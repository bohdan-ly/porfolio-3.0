import React from 'react';
import classNames from 'classnames';
import { useLocalStorage } from 'usehooks-ts';

export const WithTheme = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', true);

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
