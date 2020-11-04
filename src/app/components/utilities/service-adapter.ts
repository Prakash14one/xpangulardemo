// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class ServiceAdapter {
    errormsg: string;

    readonly httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'If-modified-Since': 'Mon, 26 Jul 1997 05:00:00 GMT',
        'Cach-Control': 'no-cache',
        'Pragma': 'no-cache'
    });

    constructor(private _http: HttpClient) {
    }

    get haserror(): boolean {
        return this.errormsg != null;
    }

    getaction<T>(path: string): Observable<any> {

        return this._http.get(path,
            {
                'headers': this.httpHeaders
            })
            .pipe(catchError(this._handleError));
    }

    getactionwithparams<T>(params: HttpParams, path: string) {
        this.errormsg = null;
        // let body = JSON.stringify(params);

        return this._http.get(path,
            {
                headers: this.httpHeaders,
                params: params
            })
            .pipe(catchError(this._handleError));
            }

    postaction<T>(param: Object, path: string): Observable<any> {

        this.errormsg = null;
        const body = JSON.stringify(param);

        return this._http.post(path, body,
        {
            headers: this.httpHeaders
        })
        .pipe(catchError(this._handleError));
    }

    patchaction<T>(httpParams: HttpParams, path: string) {

        return this._http.patch(path,
            {
                headers: this.httpHeaders,
                params: httpParams
            })
            .pipe(catchError(this._handleError));
    }

    deleteaction<T>(httpParams: HttpParams, path: string) {
        return this._http.delete(path,
            {
                headers: this.httpHeaders,
                params: httpParams
            })
            .pipe(catchError(this._handleError));
    }

    private _handleError(error: any) {
        return throwError(error || 'Server error');
    }
}
