import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/components';
import { AboutMe } from 'widgets/about';
import { Hero } from 'widgets/hero';
import { WelcomeMessage } from 'widgets/hero/ui/welcomeMessage';
import { Showcases } from 'widgets/showcases';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <WelcomeMessage />
      <Hero />
      <Page title={t('Showcase')} bg="bg-zinc-100 dark:bg-zinc-900">
        <Showcases />
      </Page>
      <Page title={t('About Me')} bg="bg-white dark:bg-editor-dark overflow-hidden">
        <AboutMe />
      </Page>
    </>
  );
};

export default HomePage;
