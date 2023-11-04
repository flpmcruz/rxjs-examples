import { Observable, Observer } from "rxjs";

const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  subs.next("Hola");
  subs.next("Mundo");

  // Forzar un error
  // const a = undefined;
  // a.nombre = 'Fernando';

  subs.complete();

  subs.next("Hola");
  subs.next("Mundo");
});

// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
//  );

const observer: Observer<any> = {
  next: (valor) => console.log("next: ", valor),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("Completado"),
};
obs$.subscribe(observer);
