import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration } from 'webpack';
import webpack from 'webpack';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';

const webpackConfiguration = (env: {
    production?: boolean;
    development?: boolean;
}): Configuration => {
    const isProduction = env.production ? true : false;
    return {
        entry: './src',
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        externals: {
            // Don't bundle react or react-dom
            // https://itnext.io/how-to-package-your-react-component-for-distribution-via-npm-d32d4bf71b4f
            react: {
                commonjs: 'react',
                commonjs2: 'react',
                amd: 'React',
                root: 'React',
            },
        },
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'index.js',
            libraryTarget: 'umd',
            umdNamedDefine: true,
            library: 'universal-components',
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
                          scripts: ['npm run build:dev'],
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
