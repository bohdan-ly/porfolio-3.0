import React from 'react';
import { Button } from 'shared/components';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';

export const WithLayout = ({ children, toggleTheme }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 h-full">
      <Header toggleTheme={toggleTheme} />
      {children}
      <Footer />
    </div>
  );
};
