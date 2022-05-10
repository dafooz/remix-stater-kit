import { authenticator } from '~/utils/auth.server';
import { commitSession, getSession } from '~/utils/session.server';

import { LoaderFunction, redirect } from '@remix-run/node';

export let loader: LoaderFunction = async ({ request }) => {
  let user = await authenticator.authenticate('google', request, {
    // TODO: Add the failure redirect
    failureRedirect: 'REDIRECT IF AUTH FAILS', // Ex: /login?error=authenticationFailed
  });

  // manually get the session
  let session = await getSession(request.headers.get('cookie'));
  // and store the user data
  session.set(authenticator.sessionKey, user);

  // commit the session
  let headers = new Headers({ 'Set-Cookie': await commitSession(session) });

  if (user) {
    // TODO Add redirection if succesful login
    return redirect(`ENTER CORRECT REDIRECTION`, { headers });
  }

};
