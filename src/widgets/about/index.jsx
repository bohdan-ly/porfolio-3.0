import React from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import { About } from './ui/about';
import { Skills } from './ui/skills';

export const AboutMe = () => {
  const darkTheme = useReadLocalStorage('darkTheme');

  return (
    <div className="relative min-h-screen">
      <div className="border-4 border-editor-dark dark:border-zinc-400 divide-x flex flex-col md:flex-row relative z-10 rounded-lg">
        <About />
        <Skills />
      </div>
      <img
        src={darkTheme ? '/about-me.png' : '/about-me-white.png'}
        className="about-me-bg w-auto h-[100vh] absolute left-[50%] -translate-x-[50%] opacity-25 top-[60vh]"
      />
    </div>
  );
};
