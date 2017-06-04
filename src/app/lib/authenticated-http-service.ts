import { Injectable } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AuthenticatedHttpService extends Http {

  constructor(backend: XHRBackend, defaultOptions: RequestOptions, private router: Router) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options).catch((error: Response) => {
      if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
        this.router.navigate(['/']);
      }
      return Observable.throw(error);
    });
  }
}
