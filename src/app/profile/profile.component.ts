import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginServices } from '../login.service';
import { profileServices } from '../profile.service'

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
  show = true;
  constructor(private LoginServices: loginServices, private route: Router,private ProfileServices: profileServices) { }

  ngOnInit() {
    this.getDetails();
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
          this.usersData = response;
          console.log(this.id)
          this.usersData = this.usersData.userData;
          for (var i = 0; i <= this.usersData.length; i++) {
            if (this.id === this.usersData[i]._id) {
              console.log(this.usersData[i]._id)
              this.user = this.usersData.splice(i, 1)
              console.log(this.user)
              // this.show = false;
            }
          }
          this.usersData = this.usersData.push(this.user)
        }
      )
  }

  friendsList() {
    this.ProfileServices.addRequest(this.usersData)
      .subscribe(
        (response) => {
          console.log(response)
          }
      )
  }
}
