import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cloudinary } from '@cloudinary/angular-5.x'; 

@Injectable()
export class AssetsLibService {
    constructor(private http: HttpClient,
      public cloudinary: Cloudinary,) { }

    getCloudinary(tag) {
      let url = this.cloudinary.url(tag+'.json', {type: "list"});
      return this.http.get<any>(url, { responseType: "json" })
    }
}
