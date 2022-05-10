import { requireUserId } from '~/utils/session.server';

import { Logtail } from '@logtail/node';
import { LoaderFunction } from '@remix-run/node';

export const dashboardLoader: LoaderFunction = async ({ request, params }) => {
  const { id: userId, email } = await requireUserId(request);

  const logtail = new Logtail(process.env.LOGTAIL_SOURCE_TOKEN || '');

  // TODO Load user data

  // LOGS INTO DOVEETAIL + throws error
  // if (!data) {
  //   logtail.error(`[USER NOT FOUND] - User with id ${userId} not found`);
  //   throw new Response(`[USER NOT FOUND] - User with id ${userId} not found`, { status: 404 });
  // }
  return { userId };
};
