import { fromEvent, range } from "rxjs";
import { map } from "rxjs/operators";

range(1, 10)
  .pipe(map<number, number>((val) => val * 10))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
keyup$.pipe(map((event) => event.code)).subscribe(console.log);
