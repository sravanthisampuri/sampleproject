import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

@Injectable()

export class profileServices{

    constructor(
        private http : HttpClient
    ){}

addRequest(getDetails){
       return this.http.post("http://localhost:3001/v1/profile/addRequest",getDetails)    
}

}