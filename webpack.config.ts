import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpack.config';
import type { IBuildPaths, IBuildEnv } from './config/build/types/config';

export default (env: IBuildEnv) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const isDev = mode === 'development';
  const apiUrl = env.apiUrl || 'http://localhost:8008';

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: 'frontend',
  });

  return config;
};
