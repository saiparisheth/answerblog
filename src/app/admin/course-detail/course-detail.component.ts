import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  id: string;
  course: any;
  availableWeeks: any[];

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService
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
    this.availableWeeks = [
      { name: 'week1' },
      { name: 'week3' },
      { name: 'week2' },
      { name: 'week4' },
      { name: 'week5' },
    ];
  }
}
