import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-admin-login-dialog',
  templateUrl: './admin-login-dialog.component.html',
  styleUrls: ['./admin-login-dialog.component.scss'],
})
export class AdminLoginDialogComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const data = {
      email: form.value.email,
      password: form.value.password,
    };

    this.homeService.adminLogin(data).subscribe((res) => {
      console.log(res);
    });
  }
}
