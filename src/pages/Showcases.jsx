import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/components';
import { Showcases } from 'widgets/showcases';

const ShowcasesPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Page title={t('Showcase')} bg="bg-zinc-100 dark:bg-zinc-900">
        <Showcases />
      </Page>
    </>
  );
};

export default ShowcasesPage;
