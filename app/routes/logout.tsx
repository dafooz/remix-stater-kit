import { authenticator } from '~/utils/auth.server';

import { ActionFunction } from '@remix-run/node';

export let action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: '/login' });
};
