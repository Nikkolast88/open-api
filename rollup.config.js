// eslint-disable-next-line no-undef
require('esbuild-register');
// eslint-disable-next-line no-undef
module.exports = require('./build/rollup.config.ts');

// import rollupJson from '@rollup/plugin-json';
// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import dts from 'rollup-plugin-dts';
// import { main, module, browser, types } from './package.json';

// export default [
//   {
//     input: 'dist/src/index.js',
//     output: {
//       file: browser,
//       format: 'umd',
//       name: 'bundle',
//     },
//     plugins: [
//       rollupJson(),
//       resolve({ mainFields: ['jsnext', 'preferBuiltins', 'browser'] }),
//       commonjs(),
//     ],
//   },
//   {
//     input: 'dist/src/index.js',
//     output: [
//       {
//         file: main,
//         format: 'cjs',
//       },
//       {
//         file: module,
//         format: 'es',
//       },
//     ],
//     plugins: [rollupJson(), dts()],
//   },
//   {
//     input: 'dist/src/index.js',
//     output: [
//       {
//         file: types,
//         format: 'es',
//       },
//     ],
//     plugins: [rollupJson(), dts()],
//   },
// ];
