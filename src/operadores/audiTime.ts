import { auditTime, fromEvent } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(auditTime(2000)).subscribe(console.log);

// autidTime: emite el ultimo valor emitido por el observable en un periodo de tiempo
