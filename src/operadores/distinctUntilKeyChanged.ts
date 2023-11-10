import { distinctUntilKeyChanged, of } from "rxjs";

const source$ = of(
  { name: "Brian" },
  { name: "Joe" },
  { name: "Joe" },
  { name: "Sue" }
);

source$
  .pipe(distinctUntilKeyChanged("name"))
  .subscribe((p) => console.log("DISTINCT OBJECTS", p));
