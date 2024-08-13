import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { routePaths } from 'shared/config/routeConfig';

interface IRequireAuth {
  children: JSX.Element;
}

export const RequireAuth = (props: IRequireAuth) => {
  const { children } = props;
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={routePaths.main} state={{ from: location }} replace />;
  }

  return children;
};
