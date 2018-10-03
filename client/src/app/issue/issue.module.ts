import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueRoutingModule } from './issue-routing.module';
import { IssueComponent } from './issue.component';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    IssueRoutingModule,
      FormsModule
  ],
  declarations: [IssueComponent, CreateComponent, IndexComponent, UpdateComponent, ViewComponent]
})
export class IssueModule { }
