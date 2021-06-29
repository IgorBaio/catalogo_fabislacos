module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module:react-native-dotenv"],
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@elements': './src/elements',
            '@svgs': './src/svgs',
            '@lib': './src/lib',
            '@nav': './src/nav',
            '@assets': './src/assets',
            '@config': './src/config',
            '@navigation': './src/navigation',
            '@actions': './src/store/actions',
            '@reducers': './src/store/reducers',
            '@sagas': './src/store/sagas',
            '@apis': './src/store/apis',
            '@fonts': './src/fonts',
          },
        },
      ],
    ],
  };
};
