import { Suspense, useEffect } from 'react';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { classNames } from 'shared/lib/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInit, userActions } from 'entities/User';
import { AppRouter } from './providers/router';

export const App = () => {
  const dispatch = useDispatch();
  const init = useSelector(getUserInit);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app')}>
      <Suspense fallback=''>
        <NavBar />
        <div className='content-page'>
          <SideBar />
          {init && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
