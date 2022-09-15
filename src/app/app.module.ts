import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputTaskComponent } from './input-task/input-task.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { FormComponent } from './stdform/form.component';
import { TableComponent } from './stdtable/table.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTaskComponent,
    StudentDetailsComponent,
    ParentComponent,
    ChildComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
