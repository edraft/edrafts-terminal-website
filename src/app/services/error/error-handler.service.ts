import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorHandlerService {

  constructor(private injector: Injector) { }

  handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => error);
  }
}
