import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LookUpService {

  constructor() { }


  getProductActiveOptions = [
    {
    value: '0'
    },
    {
      value: '1'
    }
  ];

}
