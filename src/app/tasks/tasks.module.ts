import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskListComponent, TaskComponent, TaskFormComponent, TaskArrayService } from '.';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskFormComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule
  ],
  providers: [TaskArrayService]
})
export class TasksModule { }
