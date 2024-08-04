import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";

export function cachingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authToken = inject(AuthService).currentUserValue;

  if (authToken) {
    const newReq = req.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + authToken.token
      }
    });
    return next(newReq);
  }
  return next(req);
}