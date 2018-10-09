import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Issue} from "./models/issue";
import {User} from "./models/user";
import {Project} from "./models/project";
import {v4 as uuid} from "uuid";

@Injectable({
    providedIn: 'root'
})
export class RpcService {

    constructor(private http: HttpClient) {
    }

    public call(method: string, params: Object): Observable<object> {
        return this.http.post<RpcRequest>(
            'http://localhost:3000',
            {method, params, id: uuid(), jsonrpc: "2.0"},
            {headers: RpcService.requestHeaders()}
        );
    }

    private static requestHeaders() {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return headers;
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
    error?: Object;
    result?: Issue & Project & User & Issue[] & Project[] & User[];
}
