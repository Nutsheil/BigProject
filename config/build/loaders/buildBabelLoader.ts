import type { RuleSetRule } from 'webpack';

export const buildBabelLoader = (isDev: boolean): RuleSetRule => ({
  test: /\.(js|ts|jsx|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        [
          'i18next-extract',
          {
            locales: ['ru', 'en'],
            keyAsDefaultValue: true,
          },
        ],
        isDev && require.resolve('react-refresh/babel'),
      ].filter(Boolean),
    },
  },
});
