import build from './build'

export default Object.assign(build, {
  input: 'src/index.js',
  output: Object.assign(build.output, {
    file: 'dist/yt-player.js',
    format: 'umd',
    exports: 'named'
  })
})
