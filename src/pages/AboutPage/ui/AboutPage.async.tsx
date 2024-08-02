import { lazy } from 'react';

// export const AboutPageAsync = lazy(() => import('./AboutPage'));
export const AboutPageAsync = lazy(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        resolve(import('./AboutPage'));
      }, 1500);
    }),
);
