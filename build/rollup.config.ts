import type { RollupOptions, OutputOptions } from 'rollup';
import type { Options as ESBuildOptions } from 'rollup-plugin-esbuild';
import esbuild from 'rollup-plugin-esbuild';
import json from '@rollup/plugin-json';
import dts from 'rollup-plugin-dts';
import { packages } from '../meta/packages';

const configs: RollupOptions[] = [];

const esbuildPlugin = esbuild();

const dtsPlugin = [dts()];
const iifeName = 'OpenAPI';
const externals = [];

const esbuildMinifer = (options: ESBuildOptions) => {
  const { renderChunk } = esbuild(options);

  return {
    name: 'esbuild-minifer',
    renderChunk,
  };
};
for (const { name, external, mjs, cjs, iife, target, dts } of packages) {
  const input = `packages/${name}/index.ts`;
  const output: OutputOptions[] = [];
  if (mjs !== false) {
    output.push({
      file: `packages/${name}/dist/index.mjs`,
      format: 'es',
      sourcemap: true,
    });
  }
  if (cjs !== false) {
    output.push({
      file: `packages/${name}/dist/index.cjs`,
      format: 'cjs',
      sourcemap: true,
    });
  }
  if (iife !== false) {
    output.push(
      {
        file: `packages/${name}/dist/index.iife.js`,
        format: 'iife',
        name: iifeName,
      },
      {
        file: `packages/${name}/dist/index.iife.min.js`,
        format: 'iife',
        name: iifeName,
        plugins: [
          esbuildMinifer({
            minify: true,
          }),
        ],
      },
    );
  }
  configs.push({
    input,
    output,
    plugins: [target ? esbuild({ target }) : esbuildPlugin, json()],
    external: [...externals, ...(external || [])],
  });

  if (dts !== false) {
    configs.push({
      input,
      output: [
        {
          file: `packages/${name}/dist/index.d.ts`,
          format: 'es',
        },
      ],
      plugins: [...dtsPlugin, json()],
      external: [...externals, ...(external || [])],
    });
  }
}
export default configs;
