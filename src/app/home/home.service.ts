import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  BACKEND_URL = environment.BACKEND_URL;

  constructor(private http: HttpClient) {}

  adminLogin(data: { email: string; password: string }) {
    // return value: id: string, message: string
    return this.http.post<{ id: string; message: string }>(
      `${this.BACKEND_URL}admin/login`,
      data
    );
  }

  getAllCourses() {
    return this.http.get<{ courses: any[]; message: string }>(
      `${this.BACKEND_URL}course`
    );
  }
}
