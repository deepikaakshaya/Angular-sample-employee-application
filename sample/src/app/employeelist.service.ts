import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeelistService {
  private url = 'https://dummyjson.com/users';

  constructor(private httpClient: HttpClient) {}

  getEmployeeList() {
    return this.httpClient.get(this.url);
  }
}
