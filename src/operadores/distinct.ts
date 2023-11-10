import { distinct, of } from "rxjs";

const source$ = of(1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8, 9, 10);

source$.pipe(distinct()).subscribe(console.log);

// distinct filter out the duplicate values with strict equality check
// Para el caso de los objetos se debe usar con el predicado

const source2$ = of(
  { name: "Brian" },
  { name: "Joe" },
  { name: "Joe" },
  { name: "Sue" }
);

source2$
  .pipe(distinct((p) => p.name))
  .subscribe((p) => console.log("DISTINCT OBJECTS", p));
