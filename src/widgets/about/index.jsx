import React from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import { About } from './ui/about';
import { Skills } from './ui/skills';

export const AboutMe = () => {
  const darkTheme = useReadLocalStorage('darkTheme');

  return (
    <div className="relative min-h-screen">
      <div className="border-4 border-editor-dark dark:border-zinc-400 divide-y md:divide-x md:divide-y-0 flex flex-col md:flex-row relative z-10 rounded-lg">
        <About />
        <Skills />
      </div>
      <div className="about-me-bg absolute w-[max-content] h-[100vh] left-[50%] -translate-x-[40%] top-0 translate-y-[70%]">
        <img
          src={darkTheme ? '/about-me.png' : '/about-me-white.png'}
          className="w-full h-full opacity-25"
        />
      </div>
    </div>
  );
};
