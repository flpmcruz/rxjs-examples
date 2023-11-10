import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const boton = document.createElement("button");
boton.innerText = "Detener Timer";

const body = document.querySelector("body");
body.append(boton);

const counter$ = interval(1000);
const clickBtn = fromEvent(boton, "click").pipe(
  tap(() => console.log("tap antes de skip")),
  skip(1), // Salta n valor
  tap(() => console.log("tap después de skip"))
);

counter$.pipe(takeUntil(clickBtn)).subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});
