export default {
    input: "./src/index.js",
    output: {
      dir: 'output',
      format: 'esm'
    },
    plugins: [
        (await import("@rollup/plugin-commonjs")).default({
            dynamicRequireTargets: [
                "./src/dynamic-require.js"
            ]
        }),
        (await import("@rollup/plugin-babel")).babel({
            babelHelpers: 'bundled'
        })
    ]
}