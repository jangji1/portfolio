/*
 * IntelliJ에서 import alias(@/ 혹은 ~/)를 제대로 잡지 못하는 현상을
 * 해당 설정파일로 해결하기 위한 용도이며, 해당 설정은 프로젝트 빌드시 사용되지 않는다!
 * 아래 설정 경로에 현재 파일을 넣어준다.
 *
 * Preferences > Languages & Frameworks > JavaScript > Webpack
 */
const srcPath = require('path').resolve(__dirname, 'src')

module.exports = {
  resolve: {
    alias: {
      '@': srcPath,
      '~': srcPath,
    },
  },
}
