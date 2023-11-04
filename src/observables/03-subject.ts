import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (valor) => console.log("next: ", valor),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("Completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => {
    subs.next(Math.random());
  }, 3000);

  return () => {
    clearInterval(intervalID);
    console.log("Intervalo destruido");
  };
});

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe((numb) => console.log(observer));
const subs2 = subject$.subscribe((numb) => console.log(observer));

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3500);
