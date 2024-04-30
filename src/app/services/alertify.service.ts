import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message:string){                                           //success func of type string
    alertify.success(message)                                        //wrap the success msg in service method
  }
  error(message:string){                                           //success func of type string
    alertify.success(message)                                        //wrap the success msg in service method
  }
}
