import path from 'path';
import { Configuration } from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';
import webpack from 'webpack';

const webpackConfiguration = (env: {
    production?: boolean;
    development?: boolean;
}): Configuration => {
    const isProduction = env.production ? true : false;
    return {
        entry: './src',
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            alias: { react: path.resolve('./node_modules/react') },
        },
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'index.js',
            libraryTarget: 'umd',
            library: 'universal-components',
        },
        externals: {
            react: 'commonjs react',
            'react-dom': 'commonjs react-dom',
            'react-is': 'commonjs react-is',
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/i,
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: !isProduction, // this generates .d.ts when it is false
                    },
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: {
                                    localIdentName: '[name]__[local]___[hash:base64:5]',
                                },
                            },
                        },
                    ],
                    include: /\.module\.css$/,
                },
                {
                    test: /\.(css|scss)$/,
                    use: ['style-loader', 'css-loader'],
                    exclude: /\.module\.css$/,
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new ForkTsCheckerWebpackPlugin({
                eslint: {
                    files: './src',
                },
            }),
            !isProduction
                ? new WebpackShellPluginNext({
                      onDoneWatch: {
                          scripts: ['npm run build'],
                          blocking: false,
                          parallel: true,
                      },
                      safe: true,
                  })
                : new webpack.DefinePlugin({}),
        ],
        devtool: 'source-map',
        watch: !isProduction,
    };
};

export default webpackConfiguration;
