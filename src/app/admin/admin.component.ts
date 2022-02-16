import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  id: string;
  adminName: string;
  adminMail: string;
  courses: any[];
  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params) {
        this.id = params['id'];
        this.adminService.getAdminDataById(this.id).subscribe((res) => {
          if (res.admin) {
            this.adminName = res.admin?.name;
            this.adminMail = res.admin?.email;
          }
        });
        this.adminService.getAdminAddedCoursesById(this.id).subscribe((res) => {
          console.log(res);
          if (res.courses) {
            this.courses = res.courses;
          }
        });
      }
    });
  }

  onCourseClicked(id: string) {
    this.adminService.getCourseDetailsById(id).subscribe((res) => {
      console.log(res);
    });
  }
}
