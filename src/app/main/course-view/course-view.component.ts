import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss'],
})
export class CourseViewComponent implements OnInit {
  course: any;
  availableWeeks: any;

  constructor(
    private mainService: MainService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params) {
        this.mainService.getCourseDetailsById(params['id']).subscribe((res) => {
          if (res.course != null) {
            this.course = res.course;
          }
        });
        this.mainService
          .getWeeksDetailsByCourseId(params['id'])
          .subscribe((res) => {
            if (res.weeks.length > 0) {
              this.availableWeeks = res.weeks;
            }
          });
      }
    });
  }
}
