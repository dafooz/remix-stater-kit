import { useTranslation } from 'react-i18next';
import { Language } from 'remix-i18next';
import { ColorModeSwitcher } from '~/components/generic/colorModeSwitcher';
import { authenticator } from '~/utils/auth.server';
import { i18n } from '~/utils/i18n.server';

import { Box, Button, HStack } from '@chakra-ui/react';
import { LoaderFunction, redirect } from '@remix-run/node';
import { Form, Outlet, useLoaderData } from '@remix-run/react';

type LoaderData = {
  displayName: string;
  i18n: Record<string, Language>;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  let user = await authenticator.isAuthenticated(request);

  if (!user) {
    throw redirect('/login');
  }

  const data: LoaderData = {
    displayName: user.displayName,
    i18n: await i18n.getTranslations(request, ['common']),
  };

  return data;
};

export default function AppRoute() {
  const { displayName } = useLoaderData<LoaderData>();
  let { t } = useTranslation('common');

  return (
    <Box>
      <header>
        <HStack>
          <Box>{t('logged_in', { displayName })}</Box>
          <Form action="/logout" method="post">
            <Button type="submit" className="button">
              Logout
            </Button>
          </Form>
          <ColorModeSwitcher />
        </HStack>
      </header>
      <main>
        <Box p={4}>
          <Outlet />
        </Box>
      </main>
    </Box>
  );
}
