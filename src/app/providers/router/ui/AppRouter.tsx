import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import type { IAppRoute } from 'shared/config/routeConfig';
import { routeConfig } from 'shared/config/routeConfig';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: IAppRoute) => {
    const wrappedElement = <div className='page-wrapper'>{route.element}</div>;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{wrappedElement}</RequireAuth> : wrappedElement}
      />
    );
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
});
AppRouter.displayName = 'AppRouter';
