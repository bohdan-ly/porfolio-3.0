import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/components';
import { AboutMe } from 'widgets/about';

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Page title="about me" bg="bg-white dark:bg-editor-dark overflow-hidden">
        <AboutMe />
      </Page>
    </>
  );
};

export default AboutPage;
