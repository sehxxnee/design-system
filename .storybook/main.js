const path = require("path");

module.exports = {
  stories: ["../**/*.stories.@(js|jsx|ts|tsx)"], 
  addons: [],
  framework: "@storybook/react-webpack5", 

  webpackFinal: async (config) => { 
    // 기존 SCSS 로더 설정을 찾아 sass-loader 옵션을 수정
    const scssRule = config.module.rules.find(rule => rule.test && rule.test.toString().includes('scss'));

    if (scssRule) {
        const sassLoader = scssRule.use.find(loader => loader.loader && loader.loader.includes('sass-loader'));

        if (sassLoader) {
            // ✅ sass-loader 옵션에 includePaths 추가: 'styles' 폴더를 검색 경로에 포함
            sassLoader.options = {
                ...sassLoader.options,
                sassOptions: {
                    // 프로젝트 루트에서 styles 폴더까지의 경로를 추가
                    includePaths: [
                        path.resolve(__dirname, '../styles/abstracts'),
                        path.resolve(__dirname, '../node_modules') // node_modules도 필요하면 추가
                    ],
                }
            };
        }
    } else {
        // SCSS 규칙이 없으면 새로 추가
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
    }

    // 💡 수정된 부분: .js와 .jsx 파일도 Babel이 처리하도록 확장
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/, // ⬅️ 여기에 .js와 .jsx를 추가했습니다.
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
