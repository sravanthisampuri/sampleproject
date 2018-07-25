import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginServices } from '../login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
public profileData;
  constructor(private LoginServices:loginServices,private route:Router) { }

  ngOnInit() {
    this.getDetails();
  
  }
  getDetails(){
  var id=localStorage.getItem('id')
    this.LoginServices.profileDetails(id)
    .subscribe(
      (response)=>{
          console.log(response)
          this.profileData = response;
      }
    )
  }
}
