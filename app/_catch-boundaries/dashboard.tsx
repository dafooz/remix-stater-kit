
import { useCatch } from '@remix-run/react';
import { CatchBoundaryComponent } from '@remix-run/react/routeModules';

export const dashboardCatchBoundary: CatchBoundaryComponent = () => {
  const caught = useCatch();
  switch (caught.status) {
    case 404: {
      return <div>Huh? There seems to be a misconfiguration with your user...</div>;
    }
    default: {
      throw new Error(`Unhandled error: ${caught.status}`);
    }
  }
};
