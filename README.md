# Reproduction repo of https://github.com/rollup/plugins/issues/1085

```
pnpm i
pnpm test
```

### Expected Behavior
It should contain the transformed module `module.exports = { a: a };`

### Actual Behavior
It contains `module.exports = { a };`, in other words, the imported module is not transformed by `plugin-babel`.
