import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute,Router} from '@angular/router';
import { AdminService } from '../admin.service';
import { AddWeekComponent } from './add-week/add-week.component';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  id: string;
  course: any;
  availableWeeks: any[];
  week1: string;

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
        this.adminService.getCourseDetailsById(this.id).subscribe((res) => {
          if (res.course != null) {
            this.course = res.course;
          }
        });
        this.adminService
          .getWeeksDetailsByCourseId(this.id)
          .subscribe((res) => {
            if (res.weeks != null) {
              this.availableWeeks = res.weeks;
            }
          });
      }
    });
  }

  onweekClicked(name: string) {
    this.week1=name;

  }

  addNewCourse() {
    this.dialog.open(AddWeekComponent, {
      data: { courseId: this.id },
      disableClose: true,
      hasBackdrop: true,
      width: '650px',
    });
  }
}
