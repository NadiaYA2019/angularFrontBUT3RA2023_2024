import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = "D5rZk3ZThl4hE2GUYHaN0U95P5dmLbDXfei1YiGVA47mwJcmhA0p9KWD";
        console.log(req.url);
        if (req.url.startsWith("https://api.pexels.com/v1")) {
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                    'Authorization': `${token}`,
                },
            });

        }
        return next.handle(req);

    }
}