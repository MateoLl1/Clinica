import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  apiImage : string = ''
  keyHostImages: string = '962e35674435a6e12712a11d03f4d97c';
  constructor(private http:HttpClient) {}

  subirImagenes(imagen:string){

    const formData = new FormData();
    formData.append('key', `${this.keyHostImages}`);
    formData.append('image', imagen);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post(`${this.apiImage}`,formData,{
      headers
    })
  }

  
}
