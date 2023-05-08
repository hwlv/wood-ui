import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle"
import basicConfig from './rollup.config.js'

const config = {
  ...basicConfig,
  output: [
    {
      file: 'dist/index.es.js',
      format: 'es',
      // alert: 'src/components/Alert/index.tsx',
      // 输出目录和其他选项...
      // entryFileNames: '[name].js', // 组件的 JavaScript 文件名
      // chunkFileNames: '[name]-[hash].js', // 其他动态导入的文件名
      // assetFileNames: '[name]-[hash].[ext]', // 非 JavaScript 文件的文件名
    }
  ],

  plugins: [
    ...basicConfig.plugins,
    excludeDependenciesFromBundle(),
  ]
}

export default config
