import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginServices } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regData={
    email:'',
    password:'',
    userName:'',
  
  
  }
  constructor( private route: Router,
    private LoginServices: loginServices) { }

  ngOnInit() {
  }
//   registerUser(){
//  this.LoginServices.registerDetails(this.regData)
//  .subscribe(
//   (response) => {
//     console.log(response);
//     this.route.navigate(['/login']);
//   }
// )
//   }

}
