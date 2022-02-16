import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  BACKEND_URL = environment.BACKEND_URL;

  constructor(private http: HttpClient) {}

  getAdminDataById(id: string) {
    return this.http.get<{ admin: any; message: string }>(
      `${this.BACKEND_URL}/admin/${id}`
    );
  }

  getAdminAddedCoursesById(id: string) {
    return this.http.get<{ courses: any[]; message: string }>(
      `${this.BACKEND_URL}admin/courses/${id}`
    );
  }

  getCourseDetailsById(id: string) {
    return this.http.get<{ courses: any; message: string }>(
      `${this.BACKEND_URL}course/${id}`
    );
  }

  addNewAdmin(form: any) {
    return this.http.post<{ admin: any; message: string }>(
      `${this.BACKEND_URL}/admin/new`,
      form
    );
  }
}
