import { requireUserId } from '~/utils/session.server';

import { ActionFunction } from '@remix-run/node';

export const dashboardAction: ActionFunction = async ({ request }) => {
  const { id: userId } = await requireUserId(request);
  const formData = await request.formData();

  // TODO: ADD SUPPORTED ACTIONS IF NEEDED
};
