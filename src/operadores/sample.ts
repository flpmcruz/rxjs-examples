import { fromEvent, interval, sample } from "rxjs";

const interval$ = interval(1000);

const clicks$ = fromEvent(document, "click");

interval$.pipe(sample(clicks$)).subscribe(console.log);

// sample: emite el ultimo valor emitido por el observable source cuando el observable notifier emite un valor. Es decir, cuando doy click, emite el ultimo valor emitido por el intervalo.
