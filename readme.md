# Test Repository

This repository is to demonstrate ts-loader issue 1243:

Definition files are not updated after initial build when using watch mode in Webpack 5:

https://github.com/TypeStrong/ts-loader/issues/1243

## Installation

```
yarn install
```

## Running

src/index.ts exports a function that returns a string:

```
const f = (x:number, y?:string, z?:string) => {
  console.log(`Output: ${x} ${y} ${z}`);
  return '42';
}
```
Start webpack in watch mode:

```
yarn watch
```

The output directory dist will contain index.d.ts, which will contain:

```
declare const f: (x: number, y?: string, z?: string) => string;
```

Change the return of f in src/index.ts to a number:
```
  return 42;
```
The bundled code dist/main.js will show the return value as a number now but the dist/index.d.ts still shows the return as a string and the file timestamp shows the file was not updated.

Exit and restart watch mode and dist/index.d.ts will be updated correctly.