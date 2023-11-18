import { debounceTime, distinctUntilChanged, fromEvent, map } from "rxjs";

const input = document.createElement("input");
document.querySelector("body").appendChild(input);

const input$ = fromEvent(input, "keyup");

input$
  .pipe(
    debounceTime(1000),
    map((event) => event.target["value"]),
    distinctUntilChanged()
  )
  .subscribe(console.log);

  // debounceTime: Emite un valor del observable si no ha emitido ningún otro valor durante el tiempo especificado. Si emite un valor, se reinicia el temporizador. Si emite muchos valores, solo se emite el último valor después de que haya pasado el tiempo especificado.