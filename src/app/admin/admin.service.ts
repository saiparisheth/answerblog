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
      `${this.BACKEND_URL}admin/${id}`
    );
  }

  getAdminAddedCoursesById(id: string) {
    return this.http.get<{ courses: any[]; message: string }>(
      `${this.BACKEND_URL}admin/courses/${id}`
    );
  }

  getCourseDetailsById(id: string) {
    return this.http.get<{ course: any; message: string }>(
      `${this.BACKEND_URL}course/${id}`
    );
  }

  getWeeksDetailsByCourseId(id: string) {
    return this.http.get<{ weeks: any; message: string }>(
      `${this.BACKEND_URL}weeks/${id}`
    );
  }

  addNewAdmin(form: any) {
    return this.http.post<{ admin: any; message: string }>(
      `${this.BACKEND_URL}admin/new`,
      form
    );
  }

  addNewCourse(form: any) {
    return this.http.post<{ course: any; message: string }>(
      `${this.BACKEND_URL}course`,
      form
    );
  }

  addNewWeek(form: any) {
    return this.http.post<{ week: any; message: string }>(
      `${this.BACKEND_URL}week/new`,
      form
    );
  }

  updateAdminDetail(form: any, id: string) {
    return this.http.put<{ admin: any; message: string }>(
      `${this.BACKEND_URL}admin/${id}`,
      form
    );
  }
}
