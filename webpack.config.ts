import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration, DefinePlugin } from 'webpack';
import { WebpackCustomRunScriptsPlugin } from '@sellerspot/webpack-run-scripts-custom-plugin';

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
        mode: isProduction ? 'production' : 'development',
        externals: {
            // Don't bundle react or react-dom
            // https://itnext.io/how-to-package-your-react-component-for-distribution-via-npm-d32d4bf71b4f
            react: {
                commonjs: 'react',
                commonjs2: 'react',
                amd: 'React',
                root: 'React',
                publicPath: '',
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
                        transpileOnly: false, // this generates .d.ts when it is false
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
                        {
                            loader: 'sass-loader',
                        },
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: require(path.join(
                                    process.cwd(),
                                    'src/styles/__library.ts',
                                )),
                            },
                        },
                    ],
                    include: /\.module\.(css|scss)$/,
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: require(path.join(
                                    process.cwd(),
                                    'src/styles/__library.ts',
                                )),
                            },
                        },
                    ],
                    exclude: /\.module\.(css|scss)$/,
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(), // cleans dist only on hard and production builds
            new ForkTsCheckerWebpackPlugin({
                eslint: {
                    files: './src',
                },
            }),
            !isProduction
                ? new WebpackCustomRunScriptsPlugin({ command: 'npm run build:dev' })
                : new DefinePlugin({}),
        ],
        devtool: isProduction ? false : 'eval-source-map', // eval super fast for development (don't allow it on production as it exposes source code)
        watch: !isProduction,
    };
};

export default webpackConfiguration;
