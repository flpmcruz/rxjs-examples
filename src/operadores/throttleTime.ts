import {
  throttleTime,
  distinctUntilChanged,
  fromEvent,
  map,
  asyncScheduler,
} from "rxjs";

const input = document.createElement("input");
document.querySelector("body").appendChild(input);

const input$ = fromEvent(input, "keyup");

input$
  .pipe(
    throttleTime(1000, asyncScheduler, { leading: false, trailing: true }),
    map((event) => event.target["value"]),
    distinctUntilChanged()
  )
  .subscribe(console.log);

// throttleTime: Emite un valor del observable inmediatamente e ignora todos los demas valores durante el tiempo especificado.

// throttleTime(1000, asyncScheduler, { leading: false, trailing: true }) configura para que no emita el primer valor y si emita el último valor después de que haya pasado el tiempo especificado.
