const path = require( 'path' );

class HookTest {
  apply(compiler) {
    compiler.hooks.done.tap({ name: 'HookTest' }, () => {
      console.log('Compiler Hook: done');
    });
    compiler.hooks.afterCompile.tap({ name: 'HookTest' }, () => {
      console.log('Compiler Hook: afterCompile');
    });
    compiler.hooks.compilation.tap('ts-loader', (compilation) => {
      console.log('Compilation Hook');
      compilation.hooks.afterProcessAssets.tap('ts-loader', (_) => {
        console.log('Compilation afterProcessAssets Hook');
      });
    });
  }
};

module.exports = {

    // bundling mode
    mode: 'production',

    // entry files
    entry: './src/index.ts',

    // output bundles (location)
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
    },

    // file resolutions
    resolve: {
        extensions: [ '.ts', '.js' ],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },

    plugins: [
      new HookTest()
    ]
};