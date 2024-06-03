import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { Book } from './book';

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
  imports: [RouterOutlet, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [abc,Book]
})
export class AppComponent {

  constructor(private _abc:abc , private _book:Book){
    _abc.show();
    _book.showBook();
  }
  // @HostListener('click',['$event'])
  // show(){
  //   alert("hello")
  // }
}
