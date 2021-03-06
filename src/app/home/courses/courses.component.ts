import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [];
  
  constructor(private homeService: HomeService,
    private router: Router) {}

  ngOnInit(): void {
    this.homeService.getAllCourses().subscribe((res) => {
      if (res.courses.length > 0) {
        this.courses = res.courses;
      }
    });
  }
  onc2Clicked(id: string) {
    this.router.navigate([`c/u/${id}`]);

  }
}
