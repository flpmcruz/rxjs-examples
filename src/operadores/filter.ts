import { from, fromEvent, range } from "rxjs";
import { filter, map } from "rxjs/operators";

range(1, 10)
  .pipe(filter((val) => val % 2 !== 0))
  .subscribe(console.log);

interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Robin",
  },
  {
    tipo: "villano",
    nombre: "Joker",
  },
];

from(personajes)
  .pipe(filter((val) => val.tipo === "heroe"))
  .subscribe(console.log);

const keyupEnter$ = fromEvent<KeyboardEvent>(document, "keyup");
keyupEnter$
  .pipe(
    map((event) => event.code),
    filter((key) => key === "Enter")
  )
  .subscribe(console.log);
