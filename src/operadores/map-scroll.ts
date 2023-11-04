import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque consectetur pretium. Curabitur et orci nec risus tristique tincidunt et nec massa. Etiam eu facilisis lorem. Duis elementum sit amet urna ut vestibulum. Donec sit amet iaculis mauris. Duis mattis laoreet erat, mattis euismod diam pharetra maximus. Mauris placerat sit amet ex pretium sollicitudin. Sed imperdiet efficitur fermentum. Cras a vehicula velit. Quisque sed eros et nisi tristique sagittis.
<br/>
<br/>
Integer fermentum diam vel libero tincidunt, ac accumsan orci tincidunt. Morbi laoreet sit amet nisl eget gravida. Nunc tincidunt nulla vitae viverra consectetur. Nullam sodales, elit eget egestas elementum, mi risus venenatis diam, sit amet scelerisque sapien elit nec eros. Nullam mattis interdum elit, quis viverra orci dapibus in. Aenean ut interdum diam, ultricies porta tellus. Praesent ac diam at mauris faucibus tincidunt eu vitae eros.
<br/>
<br/>
Vivamus vitae lorem in lacus rhoncus malesuada. Sed id dictum lectus. Maecenas non velit massa. Mauris convallis turpis non finibus efficitur. Curabitur egestas lacus nec elementum tempor. Vivamus vitae ornare leo. Suspendisse eu urna sit amet quam consectetur semper quis nec enim. Cras bibendum vestibulum mauris, ut auctor leo vestibulum vitae. Duis lectus ex, interdum quis sollicitudin eget, rhoncus vitae magna. Morbi porttitor est sit amet interdum ornare. Suspendisse cursus ligula ac leo pretium tempor. Vestibulum ut ullamcorper ex. Nullam et enim eget eros convallis pharetra.
<br/>
<br/>
Nam vitae elementum lorem, eget volutpat purus. Etiam accumsan tellus ipsum, vel aliquam eros aliquet a. Aliquam eget placerat leo. Vestibulum a sem in sapien ornare aliquam vitae id risus. Donec mollis, erat id varius scelerisque, nisi ligula imperdiet nisl, et tempor lacus erat et urna. Aenean semper leo eget gravida dignissim. Curabitur dignissim lectus nec nulla placerat, at euismod sem pharetra. Donec eleifend dolor nec urna congue, quis volutpat nunc eleifend. Etiam enim sapien, mattis nec leo id, maximus condimentum diam. Nunc pellentesque massa urna, in feugiat ligula lacinia eget. Sed et pulvinar leo, tincidunt tincidunt nulla. Duis molestie est non hendrerit dictum. Cras vitae finibus mi.
<br/>
<br/>
Ut semper justo a elit porta, at sagittis nisi tempor. Suspendisse in ultrices turpis. Duis eget erat at lectus placerat ornare vel in nunc. Nunc interdum aliquet enim quis luctus. Proin posuere risus vitae odio volutpat, quis pretium tellus dictum. Mauris pulvinar arcu augue, sit amet volutpat sapien venenatis eu. Donec id dolor in turpis malesuada venenatis.
`;

const body = document.querySelector("body");
body.appendChild(texto);

const progresbar = document.createElement("div");
progresbar.setAttribute("class", "progress-bar");
body.appendChild(progresbar);

// Funcion que haga el calculo
const calcularPorcentaje = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const scroll$ = fromEvent(document, "scroll");
const progress$ = scroll$.pipe(map((event) => calcularPorcentaje(event)));

progress$.subscribe((porcentaje) => {
  progresbar.style.width = `${porcentaje}%`;
});
