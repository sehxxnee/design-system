const path = require("path");

module.exports = {
  stories: ["../**/*.stories.@(js|jsx|ts|tsx)"],  
  addons: [],
  framework: "@storybook/react-webpack5",  

  webpackFinal: async (config) => { 
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: { auto: true },  
          },
        },
        "sass-loader",
      ],
      include: path.resolve(__dirname, "../"),
    });
 
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [["react-app", { flow: false, typescript: true }]],
          },
        },
      ],
      exclude: /node_modules/, 
    });
 
    config.resolve.extensions.push(".ts", ".tsx", ".js", ".jsx");

    return config;
  },

  docs: {
    autodocs: true,
  },

  //staticDirs: ["../public"],  
};
