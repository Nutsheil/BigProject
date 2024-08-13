import type { RuleSetRule } from 'webpack';
import type { IBuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders({ isDev }: IBuildOptions): RuleSetRule[] {
  const svgLoader: RuleSetRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: 'file-loader',
  };

  const babelLoader: RuleSetRule = buildBabelLoader(isDev);
  const cssLoader: RuleSetRule = buildCssLoader(isDev);

  const typeScriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, babelLoader, typeScriptLoader, cssLoader];
}
