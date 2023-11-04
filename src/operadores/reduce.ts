import { interval, reduce, take } from "rxjs";

const numbers = [1, 2, 3, 4, 5];
const totalReducer = (accumulator: number, currentValue: number) => {
  return accumulator + currentValue;
};
const total = numbers.reduce(totalReducer, 0);
console.log("total arr", total);

interval(1000)
  .pipe(take(3), reduce(totalReducer))
  .subscribe({
    next: (val) => console.log("next", val), 
    error: (err) => console.warn("error", err),
    complete: () => console.info("complete"),
  });
