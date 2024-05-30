import { RuleSetRule } from 'webpack';
import { IBuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: IBuildOptions): RuleSetRule[] {
  const svgLoader: RuleSetRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: 'file-loader',
  };

  const babelLoader: RuleSetRule = {
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
        ],
      },
    },
  };

  const cssLoader: RuleSetRule = buildCssLoader(isDev);

  const typeScriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typeScriptLoader,
    cssLoader,
  ];
}
