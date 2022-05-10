import i18next from 'i18next';
import { hydrate } from 'react-dom';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import { RemixBrowser } from '@remix-run/react';

i18next
  .use(initReactI18next)
  .init({
    // TODO Update list of languages if necessary
    supportedLngs: ['en', 'fr'],
    defaultNS: 'common',
    fallbackLng: 'en',
    react: { useSuspense: false },
  })
  .then(() => {
    return hydrate(
      <I18nextProvider i18n={i18next}>
        <RemixBrowser />
      </I18nextProvider>,
      document,
    );
  });
