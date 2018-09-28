import {Component, OnInit} from '@angular/core';
import {RpcResponse, RpcService} from "./rpc.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo';
  list: Array<object>;
  todo: Object = {};

  constructor(private rpcService: RpcService) {
  }

  public getList() {
    this.rpcService.send('todo.list', {}).subscribe((res: RpcResponse) => {
      this.list = res.result;
    });
  }

  ngOnInit(): void {
    this.getList();
  }

  public create() {
    this.rpcService.send('todo.create', this.todo).subscribe((res: RpcResponse) => {
      for (let item of res.result) {

        this.list.push(item);
      }
    });
    this.todo = {};
  }

  public update() {
    this.todo = this.rpcService.send('todo.update', this.todo).subscribe((res: RpcResponse) => {
      this.getList();
    });
  }

  public delete() {
    this.todo = this.rpcService.send('todo.delete', this.todo).subscribe((res: RpcResponse) => {
      this.getList();
    });
  }

  public view(id) {
    this.todo = this.rpcService.send('todo.view', {id}).subscribe((res: RpcResponse) => {
      for (let item of res.result) {
        this.todo = item;
      }
    });
  }
}
