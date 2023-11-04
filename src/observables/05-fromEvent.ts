import { fromEvent } from "rxjs";

/* 
Eventos del DOM
*/

const src1$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (val) => console.log("next", val),
};
src2$.subscribe(observer);

src1$.subscribe(({ x, y }) => {
  console.log(x, y);
});

document.addEventListener("click", (event) => {
  console.log(event);
});
