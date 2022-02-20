import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  BACKEND_URL = environment.BACKEND_URL;

  constructor(private http: HttpClient) {}

  getAllCourses() {
    return this.http.get<{ courses: any[]; message: string }>(
      `${this.BACKEND_URL}/course`
    );
  }
}
