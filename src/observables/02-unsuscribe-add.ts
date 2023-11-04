import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (valor) => console.log("next: ", valor),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("Completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  let number = 0;
  const interval = setInterval(() => {
    subs.next(number++);
  }, 1000);

  // Se ejecuta cuando se hace el unsubscribe
  return () => {
    clearInterval(interval);
    console.log("Intervalo destruido");
  };
});

const subs1 = intervalo$.subscribe((num) => console.log(observer));
const subs2 = intervalo$.subscribe((num) => console.log(observer));
const subs3 = intervalo$.subscribe((num) => console.log(observer));

subs1.add(subs2);
subs1.add(subs3);

setTimeout(() => {
  // Para de recibir notificaciones del observable
  // subs1.unsubscribe();
  // subs2.unsubscribe();
  // subs3.unsubscribe();

  subs1.unsubscribe();
}, 10000);
