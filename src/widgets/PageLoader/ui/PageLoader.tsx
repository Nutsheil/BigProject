import { Loader } from 'shared/ui/Loader';
import classes from './PageLoader.module.scss';

export const PageLoader = () => (
  <div className={classes.PageLoader}>
    <Loader />
  </div>
);
