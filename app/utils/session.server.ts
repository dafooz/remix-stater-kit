// app/services/session.server.ts
import { createCookieSessionStorage, redirect } from '@remix-run/node';

// export the whole sessionStorage object
export let sessionStorage = createCookieSessionStorage({
  cookie: {
    // TODO add cookie name
    name: '<YOUR_COOKIE_NAME>', // use any name you want here
    sameSite: 'lax', // this helps with CSRF
    path: '/', // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: ['s3cr3t'], // replace this with an actual secret
    secure: process.env.NODE_ENV === 'production', // enable this in prod only
  },
});

// you can also export the methods individually for your own usage
export let { getSession, commitSession, destroySession } = sessionStorage;

export function getUserSession(request: Request) {
  return sessionStorage.getSession(request.headers.get('Cookie'));
}

export const requireUserId = async (
  request: Request,
  redirectTo: string = new URL(request.url).pathname,
): Promise<{ id: string; email: string }> => {
  const session = await getUserSession(request);
  const user = session.get('user');
  if (!user || typeof user.id !== 'string') {
    const searchParams = new URLSearchParams([['redirectTo', redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return { id: user.id, email: user.email };
};
