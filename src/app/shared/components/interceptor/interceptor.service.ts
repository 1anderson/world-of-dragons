import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {
 HttpEvent,
 HttpInterceptor,
 HttpHandler,
 HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private spinner: NgxSpinnerService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
   ): Observable<HttpEvent<any>> {
    console.log('lalalalalalalal');
    this.spinner.show();
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.spinner.hide();
          }
          return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.spinner.hide();
        return throwError(error);
      })
   );
}
}

