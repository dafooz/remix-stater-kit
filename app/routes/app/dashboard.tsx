import { dashboardAction } from '~/_actions';
import { dashboardCatchBoundary } from '~/_catch-boundaries/dashboard';
import { dashboardLoader } from '~/_loaders';

import { ActionFunction, LoaderFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { CatchBoundaryComponent } from '@remix-run/react/routeModules';

export const loader: LoaderFunction = dashboardLoader;

export const action: ActionFunction = dashboardAction;

export const CatchBoundary: CatchBoundaryComponent = dashboardCatchBoundary;

const DashboardPage = () => {
  return <div>Dashboard</div>;
};

export default DashboardPage;

export const handle = {
  breadcrumb: () => <Link to="/app/dashboard">Dashboard</Link>,
};
