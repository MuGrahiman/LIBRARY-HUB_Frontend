const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        "dark-purple":"#081a51",
        "light-white":"rgba(255,255,255,0.17)",
      },
    },
  },
  _plugins: [require(newFunction())],
  get plugins() {
    return this._plugins;
  },
  set plugins(value) {
    this._plugins = value;
  },
  darkMode: "class",
});

function newFunction() {
  return "tw-elements/dist/plugin.cjs";
}
