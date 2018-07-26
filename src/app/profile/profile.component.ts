import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginServices } from '../login.service';
import { profileServices } from '../profile.service'
import { _ } from 'underscore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profileData;
  public id;
  public usersData;
  public user;
  public users;
  show = true;
  public userDetails = [];
  constructor(private LoginServices: loginServices, private route: Router, private ProfileServices: profileServices) { }

  ngOnInit() {
    this.getDetails();
    this.getFriendsList();
  }
  getDetails() {
    this.id = localStorage.getItem('id')
    this.LoginServices.profileDetails(this.id)
      .subscribe(
        (response) => {
          console.log(response)
          this.profileData = response;
          // this.profileData = this.profileData.userData;
          console.log(this.profileData)
          this.userList()

        }
      )
  }
  userList() {
    this.LoginServices.getUserlist()
      .subscribe(
        (response) => {
          console.log(response)
          this.users = response;
          this.usersData = this.users.userData;
          console.log(this.usersData)
          for (var i = 0; i <= this.usersData.length; i++) {
            if (this.id != this.usersData[i]._id) {
              this.userDetails.push(this.usersData[i]);
            }
          }


          
        }
      )
  }

  friendsList(user) {
    console.log(user);
    this.ProfileServices.addRequest({senderId:this.id , recieverId :user._id , status : "Requested"})
      .subscribe(
        (response) => {
          console.log(response)
        }
      )
  }

  getFriendsList(){
    this.ProfileServices.getFriendsList(this.id)
      .subscribe(
        (response) => {
          console.log(response)
        }
      )
  }


  requestconfirmation(userDetails,confirmation){
    if(confirmation == '1'){
      this.ProfileServices.confirmRequest(userDetails,this.id)
        .subscribe(
          (response) =>{
            console.log(response);
          }
        )
    }
  }


}
