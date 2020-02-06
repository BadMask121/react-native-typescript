module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  dependencies: {
    'local-rn-library': {
      root: '/root/libraries',
    },
  },
  assets: ['./assets', './lib/assets'], // stays the same// formerly "plugin", returns an array of commands
};
