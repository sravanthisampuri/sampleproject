import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginServices } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData={
    email:'',
    password:''
  }
  public data;
  constructor( private route: Router,
    private LoginServices: loginServices) { }

  ngOnInit() {
  }
  loginUser() {
    console.log(this.loginData)
    if (!this.loginData.email) {
   alert("Please Provide Email");
 } else if (!this.loginData.password) {
   alert("Please Provide Password");
 }

 else {
   this.LoginServices.loginDetails(this.loginData)
     .subscribe(
       (response) => {
         console.log(response);
         this.data = response;
         if(this.data.status){
          localStorage.setItem('id',this.data.user._id)  
          this.route.navigate(['/profile']);
         }else{
           alert("wrong credentials")
         }
        //  this.data = this.data.user;
      
       }
     )

 }

}
// getUsrDetails(){
//   this.LoginServices.getDetails(this.data)
//   .subscribe(
//      (response)=>{
//       console.log(response)
//     }
//   )
// }

}
