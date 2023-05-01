import React from 'react';
import { Button } from 'shared/components';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const WelcomeMessage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const linkNav = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <section className="relative dark:text-white mx-auto max-w-7xl z-10 h-screen flex flex-col justify-center">
      <div className="welcome-message p-6 lg:px-8 rounded w-fit flex flex-col md:block sticky top-0">
        <h1 className="text-metallic fade-in max-w-2xl text-center lg:text-left mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-8xl dark:text-white">
          {t('fullName')}
        </h1>
        <span className="sr-only">Bohdan Ly portfolio</span>
        <p className="text-center md:text-left max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Front-end developer / Creative student / Cool teammate
        </p>
        <div className="flex gap-5 flex-col md:flex-row">
          <Button title="Discover" onClick={() => linkNav('/showcases')} />
          <a href="/BohdanLyCV.pdf" download className="w-full lg:w-auto">
            <Button
              title="Download CV"
              className="w-full border transition-all border-gray-400 hover:bg-gray-500 hover:text-white dark:text-white font-medium text-xl py-2 px-8 rounded"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
