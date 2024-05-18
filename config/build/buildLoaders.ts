import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'
import { IBuildOptions } from './types/config'

export function buildLoaders({isDev}: IBuildOptions): RuleSetRule[] {

	const svgLoader: RuleSetRule = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	const fileLoader: RuleSetRule = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: 'file-loader',
	};

	const stylesLoader: RuleSetRule = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
					},
				}
			},
			"sass-loader",
		],
	};

	const typeScriptLoader: RuleSetRule = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [
		fileLoader,
		svgLoader,
		typeScriptLoader,
		stylesLoader,
	]
}