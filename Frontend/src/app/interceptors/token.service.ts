import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TokenService implements HttpInterceptor {

  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjVkOTU2OTMxYmZlNDQ2MTVkYzI0ZmM4MiIsIm5vbWJyZSI6Ikp1YW4gT3NvcmlvIiwiZW1haWwiOiJqdWFuQGdtYWlsLmNvbSIsImF2YXRhciI6ImF2Mi5wbmcifSwiaWF0IjoxNTc3MzI2OTQ0LCJleHAiOjE1Nzc0MTMzNDR9.9k2bS0i30Lw1JVWDjw_ueguRYCM1tNH2g3Zg0ou4Rbw';

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({'x-token': this.token });
    const cloneRequest = req.clone({ headers });
    return next.handle(cloneRequest).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}