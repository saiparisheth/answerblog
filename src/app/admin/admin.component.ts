import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AdminService } from './admin.service';
import { EditDetailComponent } from './edit-detail/edit-detail.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  id: string;
  adminDetail: any;
  courses: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params) {
        this.id = params['id'];
        this.adminService.getAdminDataById(this.id).subscribe((res) => {
          if (res.admin) {
            this.adminDetail = res.admin;
          }
        });
        this.adminService.getAdminAddedCoursesById(this.id).subscribe((res) => {
          if (res.courses) {
            this.courses = res.courses;
          }
        });
      }
    });
  }

  onCourseClicked(id: string) {
    this.router.navigate([`c/${id}`]);
  }

  editDetail() {
    this.dialog.open(EditDetailComponent, {
      data: {
        adminDetail: this.adminDetail,
      },
      disableClose: true,
      hasBackdrop: true,
      width: '350px',
    });
  }

  addAdmin() {
    this.dialog.open(AddAdminComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '350px',
    });
  }

  addNewCourse() {
    this.dialog.open(AddCourseComponent, {
      data: {
        id: this.adminDetail._id,
      },
      disableClose: true,
      hasBackdrop: true,
      width: '350px',
    });
  }
}
