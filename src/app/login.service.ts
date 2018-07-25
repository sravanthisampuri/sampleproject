import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

@Injectable()

export class loginServices{

    constructor(
        private http : HttpClient
    ){}

loginDetails(getDetails){
       return this.http.post("http://localhost:3001/v1/login/logindetails",getDetails)    
}
profileDetails(id){
    return this.http.get("http://localhost:3001/v1/profile/profiledetails/"+id)    
}
}