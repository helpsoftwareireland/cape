import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class WpService {
  constructor(private http: HttpClient) {}
  base_path = `https://capecleardistillery.com/wp-json/wp/v2/`;
  getBlog() {
    return this.http
      .get(this.base_path + 'posts?page=1&per_page=24')
      .pipe(retry(2), catchError(this.handleError));
  }
  getPost(id: string) {
    //https://capecleardistillery.com/wp-json/wp/v2/posts/6560
    return this.http
      .get(this.base_path + 'posts/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
