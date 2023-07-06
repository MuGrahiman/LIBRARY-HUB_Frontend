const webpack = require('webpack');
const dotenv = require('dotenv');

// Load environment variables from .env file
const env = dotenv.config().parsed;

// Create an object of environment variables
const envVariables = Object.keys(env).reduce((acc, key) => {
  acc[`process.env.${key}`] = JSON.stringify(env[key]);
  return acc;
}, {});

// Add DefinePlugin to inject environment variables
module.exports = {
  // Existing configuration...
  plugins: [
    new webpack.DefinePlugin(envVariables),
    // Other plugins...
  ],
};
