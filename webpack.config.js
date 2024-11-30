const path = require("path");

module.exports = {
  entry: "./src/index.js", // 진입점 파일
  output: {
    filename: "bundle.js", // 번들된 파일 이름
    path: path.resolve(__dirname, "dist"), // 출력 폴더 (dist)
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // .scss 파일을 처리
        use: [
          "style-loader", // HTML에 CSS를 삽입
          "css-loader", // CSS를 읽어들임
          "sass-loader", // SCSS를 CSS로 컴파일
        ],
      },
    ],
  },
  mode: "development", // 개발 모드
};
