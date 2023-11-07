import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog'
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'
import { ErrorComponent } from './error/error.component'; 

@Injectable()
export class ErrorinterceptorInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler)
  {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse)=>{
        if (error.status != 201) {

        console.log('Error object:', error);
        let errorMessage = "An Unknown Error has occured"
        if (error.statusText)
        {
          errorMessage = error.statusText
        }
        this.dialog.open(ErrorComponent, {data:{message:errorMessage}})
      }

        return throwError(error)

      })
    )
  }
}
