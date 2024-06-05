import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgIf],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
isLoggedIn;
gender= true;
num1 = 200;
num2 = 300;
name = 'ravan';

logIn(){
  this.isLoggedIn = true;
}
logOut(){
  this.isLoggedIn = false;
}
onChange(val){
this.gender= val
}
}
