import { authenticator } from '~/utils/auth.server';

import { ActionFunction, LoaderFunction, redirect } from '@remix-run/node';

export let loader: LoaderFunction = () => redirect('/login');

export let action: ActionFunction = ({ request }) => {
  return authenticator.authenticate('google', request);
};
