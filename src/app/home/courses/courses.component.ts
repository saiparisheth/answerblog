import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [];
  
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getAllCourses().subscribe((res) => {
      if (res.courses.length > 0) {
        this.courses = res.courses;
      }
    });
  }
}
