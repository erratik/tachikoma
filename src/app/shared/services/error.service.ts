import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Logger } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private logger: Logger) {}

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      this.logger.warn(`🤖 An error occurred: ${error.error.message}`);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      const err = error.error instanceof String ? error.error : JSON.stringify(error.error);
      this.logger.warn(`👹 Oni returned code ${error.status}, body was: ${err}`);
    }
    // return an observable with a user-facing error message
    return throwError('🤬 Something bad happened; please try again later.');
  }
}
