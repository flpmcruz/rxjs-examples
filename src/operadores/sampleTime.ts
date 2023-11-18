import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    sampleTime(2000),
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe(console.log);

// sampleTime: emite el ultimo valor emitido por el observable en el intervalo de tiempo especificado aunque se hayan emitido mas valores en ese intervalo de tiempo
// si no se emite ningun valor en el intervalo de tiempo especificado, no se emite ningun valor
