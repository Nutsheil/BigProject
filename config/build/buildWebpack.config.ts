import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildPlugins } from './buildPlugins'
import { IBuildOptions } from './types/config'

export function buildWebpackConfig(options: IBuildOptions): Configuration {
	const {mode, paths} = options

	return {
		mode: mode,
		entry: paths.entry,
		module: {
    	rules: buildLoaders()
  	},
  	resolve: buildResolvers(),
		output: {
			filename: '[name].[contenthash].js',
    	path: paths.build,
			clean: true
		},
		plugins: buildPlugins(options)
	}
}
