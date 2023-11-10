import { distinctUntilChanged, of } from "rxjs";

const source$ = of(1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8, 9, 10);

source$.pipe(distinctUntilChanged()).subscribe(console.log);

// distinct filter out the duplicate values with strict equality check comparison with previous value

const source2$ = of(
  { name: "Brian" },
  { name: "Joe" },
  { name: "Joe" },
  { name: "Sue" }
);

source2$
  .pipe(distinctUntilChanged((ant, act) => ant.name === act.name))
  .subscribe((p) => console.log("DISTINCT OBJECTS", p));
