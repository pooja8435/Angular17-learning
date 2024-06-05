import { Component, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  preserveWhitespaces: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  // encapsulation: ViewEncapsulation.None,
  inputs: ['pData'],
  outputs: ['childEvent']
})
export class EmployeeComponent {
  pData: any;
childEvent = new EventEmitter();
  sendData(val:any){
    this.childEvent.emit(val)
  }

}
