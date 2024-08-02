import type { FC } from 'react';
import { lazy } from 'react';
import type { ILoginForm } from './LoginForm';

// export const LoginFormAsync = lazy<FC<ILoginForm>>(() => import('./LoginForm'));
export const LoginFormAsync = lazy<FC<ILoginForm>>(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        resolve(import('./LoginForm'));
      }, 1500);
    }),
);
