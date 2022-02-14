import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-login-dialog',
  templateUrl: './admin-login-dialog.component.html',
  styleUrls: ['./admin-login-dialog.component.scss'],
})
export class AdminLoginDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(form.value);
  }
}
