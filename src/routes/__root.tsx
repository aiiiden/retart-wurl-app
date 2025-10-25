import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Providers } from '@/providers';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Providers>
        <Outlet />
      </Providers>
    </React.Fragment>
  );
}
