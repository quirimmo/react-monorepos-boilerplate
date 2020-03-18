import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import progress from 'rollup-plugin-progress';

export default {
  input: 'lib/shared-config.js',
  output: {
    dir: 'dist',
    format: 'cjs',
    exports: 'named',
    sourcemap: true
  },
  plugins: [progress({ clearLine: false }), commonjs(), terser()]
};
