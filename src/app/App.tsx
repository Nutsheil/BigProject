import { Suspense } from 'react';
import { SideBar } from 'widgets/SideBar';
import { classNames } from 'shared/lib/classNames';
import { NavBar } from 'widgets/NavBar';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, theme)}>
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

export { App };
