```
❯  npm test

> fishery-mutation-reproduction@1.0.0 test
> ts-node index.ts

C:\Users\Marvin\Projekte\fishery-mutation-reproduction\index.ts:40
assert.equal(uniqBy(users, 'id').length, users.length);
       ^
AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

16 !== 20

    at Object.<anonymous> (C:\Users\Marvin\Projekte\fishery-mutation-reproduction\index.ts:40:8)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Module.m._compile (C:\Users\Marvin\Projekte\fishery-mutation-reproduction\node_modules\ts-node\src\index.ts:1371:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Object.require.extensions.<computed> [as .ts] (C:\Users\Marvin\Projekte\fishery-mutation-reproduction\node_modules\ts-node\src\index.ts:1374:12)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at main (C:\Users\Marvin\Projekte\fishery-mutation-reproduction\node_modules\ts-node\src\bin.ts:331:12)
    at Object.<anonymous> (C:\Users\Marvin\Projekte\fishery-mutation-reproduction\node_modules\ts-node\src\bin.ts:482:3) {
  generatedMessage: true,
  code: 'ERR_ASSERTION',
  actual: 16,
  expected: 20,
  operator: 'strictEqual'
}
```