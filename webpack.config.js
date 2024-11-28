const path = require("path");

module.exports = {
  entry: "./src/index.js", // 진입점 파일
  output: {
    filename: "bundle.js", // 번들된 파일 이름
    path: path.resolve(__dirname, "dist"), // 출력 폴더 (dist)
  },
  mode: "development", // 개발 모드
};
