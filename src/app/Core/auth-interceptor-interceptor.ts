import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

   const token = localStorage.getItem('token');
   const authReq = req.clone({
     setHeaders: {
       Authorization: `Bearer ${token}`
     }
   });
  return next(authReq);

};
