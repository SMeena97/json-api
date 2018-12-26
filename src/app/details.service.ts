import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import { Observable } from 'rxjs';

import { map } from "rxjs/operators";


import {DetailsInterface} from "./details-interface";

@Injectable()
export class DetailsService {

  private postsURL ="https://customer11.herokuapp.com/customers";

  constructor(private http: Http ) {}
 getPosts(): Observable<DetailsInterface[]>{
    return this.http
     .get(this.postsURL)
     .pipe(map((response: Response)=> {
       return <DetailsInterface[]>response.json();
     }))
     
 }

 private handleError(error: Response) {
   return Observable.throw(error.statusText);
 }

}
