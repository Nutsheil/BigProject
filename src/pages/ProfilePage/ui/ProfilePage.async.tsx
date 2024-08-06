import { lazy } from 'react';

// export const AboutPageAsync = lazy(() => import('./AboutPage'));
export const ProfilePageAsync = lazy(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        resolve(import('./ProfilePage'));
      }, 1500);
    }),
);
