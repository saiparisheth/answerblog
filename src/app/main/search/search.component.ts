import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  coursesAvailable = [];
  courses = [];
  enteredValues: string;

  constructor(
    private mainService: MainService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._getCourses();
    this.route.params.subscribe((params) => {
      if (params) {
        this.enteredValues = params['value'];
        this.onValueEntered(params['value']);
      }
    });
  }

  onValueEntered(value: string) {
    this.enteredValues = value;

    if (value === null || value === undefined || value === '') {
      this.coursesAvailable = this.courses;
      return;
    }

    this.coursesAvailable = [];
    this.courses.filter((course) => {
      if (course.courseName.toLowerCase() === value.toLowerCase()) {
        this.coursesAvailable.push(course);
      }
    });
  }

  private _getCourses() {
    this.mainService.getAllCourses().subscribe((res) => {
      if (res.courses.length > 0) {
        this.coursesAvailable = res.courses;
        this.courses = this.coursesAvailable;
      }
    });
  }
}
