import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RpcService {

  constructor(private http: HttpClient) {
  }

  public send(method: string, params: Object) {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.http.post('http://localhost:3001',
      {method, params, id: 1, jsonrpc: "2.0"},
      {headers});
  }
}

export interface RpcRequest {
  id: any;
  jsonrpc: String;
  method: String;
  params: Object;
}

export interface RpcResponse {
  id: any;
  jsonrpc: String;
  method: String;
  error: Object;
  result: Array<object>;
}
