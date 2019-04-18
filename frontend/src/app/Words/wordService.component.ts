import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import {URLSearchParams,RequestOptions} from '@angular/http';
import { Observable } from "rxjs";
import {Words} from "./words.Model";

import {map} from 'rxjs/Operators';

import {browserRefresh} from './words.component';

@Injectable()
export class WordServiceComponent{
    
baseurl:string;
wordss = ['increase','wonders','pride','testimony','audacious'];
public browserRefreshStatus : boolean = false;
count : number=1;
    constructor(private _http:HttpClient){
      
 
    }

   /* getNewWords():Observable<Words>{  
        //return this._http.get<Words>('http://localhost:11139/api/values');   
           return this._http.get<Words>('https://gredictionarywebapi.azurewebsites.net/api/values'); 
        
 
     }*/

    getNewWords():Observable<Words[]>{  
       
            return this._http.get<Words[]>('https://gredictionarywebapi.azurewebsites.net/api/values'); 
       

    }

        
}