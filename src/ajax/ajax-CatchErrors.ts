import { catchError, map } from "rxjs";
import { ajax } from "rxjs/ajax";

const url = "https://api.github.com/users?per_page=5";

ajax(url)
  .pipe(
    map((resp) => resp.response),
    catchError((err) => {
      console.warn("error en:", err.message);
      return [];
    })
  )
  .subscribe(console.log);
