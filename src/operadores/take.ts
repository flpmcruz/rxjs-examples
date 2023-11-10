import { of, take } from "rxjs";

const numeros$ = of(1, 2, 3, 4, 5);

numeros$.pipe(take(3)).subscribe({
  next: (value) => console.log("next: ", value),
  complete: () => console.log("complete"),
});

//el take es un operador que nos permite tomar los primeros n valores de un observable y luego completar el observable y terminar la subscripcion, es decir, la emision de valores
