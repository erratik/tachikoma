import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Logger } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(private logger: Logger) {}

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      this.logger.error(`🤖 An error occurred: ${error.error.message}`);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      const err = error.error instanceof String ? error.error : JSON.stringify(error.error);

      switch (error.status) {
        case 400:
          this.logger.warn(`👹 ONI says: Bad Request!`);
          break;
        case 401:
          this.logger.warn(`🔐 ONI says: Unauthorized!`);
          break;
        default:
          this.logger.error(`🤬 Oni returned code ${error.status}, body was: ${err}`);
          break;
      }
    }
    // return an observable with a user-facing error message
    return throwError('😕 Well, this is embarrassing.... please try again later.');
  }
}
