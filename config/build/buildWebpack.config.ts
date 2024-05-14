import { Configuration } from 'webpack';
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildPlugins } from './buildPlugins'
import { IBuildOptions } from './types/config'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: IBuildOptions): Configuration {
	const {mode, paths} = options

	return {
		mode: mode,
		entry: paths.entry,
		module: {
    	rules: buildLoaders(options)
  	},
  	resolve: buildResolvers(),
		output: {
			filename: '[name].[contenthash].js',
    	path: paths.build,
			clean: true
		},
		plugins: buildPlugins(options),
		devtool: options.isDev ? 'inline-source-map' : undefined,
		devServer: options.isDev ? buildDevServer(options) : undefined,
	}
}
