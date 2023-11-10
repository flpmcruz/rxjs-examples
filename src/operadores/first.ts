import { fromEvent } from "rxjs";
import { first, take } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    first() // take(1) === first()
    // first((event) => event.clientY >= 150)
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });

// first emite el primer valor que cumpla la condicion
