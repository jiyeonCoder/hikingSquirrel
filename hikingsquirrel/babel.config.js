module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    //Added a line below
    plugins: ['react-native-reanimated/plugin'],
  };
};
