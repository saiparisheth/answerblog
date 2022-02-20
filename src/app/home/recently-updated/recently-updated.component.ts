import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-recently-updated',
  templateUrl: './recently-updated.component.html',
  styleUrls: ['./recently-updated.component.scss'],
})
export class RecentlyUpdatedComponent implements OnInit {
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
