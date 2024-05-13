import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpack.config'
import { IBuildPaths } from './config/build/types/config'

const paths: IBuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = 'development'
const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpackConfig({
  mode: mode,
  paths: paths,
  isDev: isDev,
})

export default config