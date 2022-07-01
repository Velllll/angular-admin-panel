import { catchError, EMPTY, Observable } from 'rxjs';
import { IUser } from './../interfaces/User.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  getPersonalList(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  }

  getPerson(id: number): Observable<IUser> {
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`) 
  }
}
