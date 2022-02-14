import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [
    { courseName: 'Ethical Hacking', description: 'week 3 updated' },
    { courseName: 'Ethical Hacking', description: 'week 3 updated' },
    { courseName: 'Ethical Hacking', description: 'week 3 updated' },
    { courseName: 'Ethical Hacking', description: 'week 3 updated' },
    { courseName: 'Ethical Hacking', description: 'week 3 updated' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
