import React from 'react';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full md:w-1/2 h-full p-10 px-4 lg:px-10 flex flex-col items-center">
      <div className="h-24 w-24 rounded-full overflow-hidden relative shadow-lg">
        <img src="/me.jpg" className="w-auto absolute" />
      </div>
      <div className="mb-auto max-w-lg w-full flex flex-col items-center mt-10">
        <div className="w-fit">
          <h3 className="text-3xl uppercase text-center text-editor-dark dark:text-zinc-100 chonky-underline-yellow">
            {t('fullName')}
          </h3>
        </div>
        {/* <p className="font-semibold mb-5 text-center text-editor-dark dark:text-zinc-100">
          Front-end Developer
        </p> */}
        <p className="text-editor-dark dark:text-zinc-100 mt-10 font-mono text-lg">
          {t('about-me')}
        </p>
      </div>
    </div>
  );
};
