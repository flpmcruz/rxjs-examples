import { asyncScheduler, range } from "rxjs";

// const src$ = range(1, 20);
const src$ = range(1, 20, asyncScheduler);

console.log("inicio");
src$.subscribe(console.log);
console.log("fin");
