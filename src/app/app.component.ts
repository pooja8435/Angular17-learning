import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { Book } from './book';
import { DirectivesComponent } from './directives/directives.component';

class abc{
  constructor(){
    console.log("external class called")
  }
  show(){
    console.log("hello world")
  }
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeComponent,DirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [abc,Book],
  preserveWhitespaces: true,
})
export class AppComponent {
cData:any;
  constructor(private _abc:abc , private _book:Book){
    _abc.show();
    _book.showBook();
  }

  getData(val:any){
    this.cData = val;
  }
  // @HostListener('click',['$event'])
  // show(){
  //   alert("hello")
  // }
}
