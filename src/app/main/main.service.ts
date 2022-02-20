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

  getCourseDetailsById(id: string) {
    return this.http.get<{ course: any; message }>(
      `${this.BACKEND_URL}course/${id}`
    );
  }

  getWeeksDetailsByCourseId(id: string) {
    return this.http.get<{ weeks: any; message: string }>(
      `${this.BACKEND_URL}weeks/${id}`
    );
  }F
}
