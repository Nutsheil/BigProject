import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'
import { IBuildOptions } from './types/config'

export function buildLoaders(options: IBuildOptions): RuleSetRule[] {
	const stylesLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			"css-loader",
			"sass-loader",
		],
	};

	const typeScriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [
		typeScriptLoader,
		stylesLoader
	]
}