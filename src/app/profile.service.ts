import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class profileServices {

    constructor(
        private http: HttpClient
    ) { }

    addRequest(friendRequestDetails) {
        return this.http.post("http://localhost:3001/v1/profile/addRequest", friendRequestDetails)
    }

    confirmRequest(senderId,recieverId){
        return this.http.post("http://localhost:3001/v1/profile/confirmRequest", {senderId:senderId,recieverId:recieverId})  
    }

    getFriendsList(id){
        return this.http.post("http://localhost:3001/v1/profile/getFriendsList",{id:id});
    }

}