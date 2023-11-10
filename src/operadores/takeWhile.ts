import { interval, takeWhile } from "rxjs";

const source$ = interval(1000);

source$
  .pipe(
    takeWhile((val) => val < 5, true) // inclusive include the last value
  )
  .subscribe({
    next: (val) => console.log(val),
    complete: () => console.log("Complete!"),
  });
