import { from, scan } from "rxjs";

const numeros$ = [1, 2, 3, 4, 5];
const totalAcumulador = (acc, cur) => acc + cur;

// Emite el valor acumulado de cada emisión
from(numeros$).pipe(scan(totalAcumulador, 0)).subscribe(console.log);
