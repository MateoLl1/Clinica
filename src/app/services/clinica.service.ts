import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {

  localApi : string = 'http://localhost:1410'
  constructor(private http:HttpClient) { }

  
}
