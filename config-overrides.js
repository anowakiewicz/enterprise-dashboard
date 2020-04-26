const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
} = require("customize-cra");

const rewireStyledComponents = require("react-app-rewire-styled-components");

module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env);
  return config;
};

module.exports = {
  webpack: override(disableEsLint(), addDecoratorsLegacy()),
};
