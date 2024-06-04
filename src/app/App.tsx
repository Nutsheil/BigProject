import { Suspense } from 'react';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from './providers/router';

export const App = () => {
  return (
    <div className={classNames('app')}>
      <Suspense fallback=''>
        <NavBar />
        <div className='content-page'>
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
