import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { getUserAuthData } from 'entities/User';
import { routeConfig } from 'shared/config/routeConfig';

export const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(
    () =>
      Object.values(routeConfig).filter(route => {
        if (route.authOnly && !isAuth) {
          return false;
        }

        return true;
      }),
    [isAuth],
  );

  // const routes = useMemo(() => Object.values(routeConfig).filter(route => !route.authOnly || isAuth), [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={<div className='page-wrapper'>{route.element}</div>} />
        ))}
      </Routes>
    </Suspense>
  );
});
AppRouter.displayName = 'AppRouter';
