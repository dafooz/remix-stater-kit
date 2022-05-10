import { useSetupTranslations } from 'remix-i18next';
import { Chakra } from '~/theme/chakra';

import { LoaderFunction } from '@remix-run/node';
import {
    Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData
} from '@remix-run/react';

import { i18n } from './utils/i18n.server';

export const loader: LoaderFunction = async ({ request }) => {
  let locale = await i18n.getLocale(request);
  return { cookies: request.headers.get('Cookie'), locale };
};

export default function App() {
  const { cookies, locale } = useLoaderData();

  useSetupTranslations(locale);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Chakra cookies={cookies}>
          <Outlet />
        </Chakra>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
