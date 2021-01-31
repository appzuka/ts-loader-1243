// Change the parameters of f and check that this is reflected in dist/index.d.ts

const f = (x:number, y?:string, z?:string) => {
  console.log(`Output: ${x} ${y} ${z}`);
  return '42';
}

console.log(f(1, 'hello world'));

export {
  f
}