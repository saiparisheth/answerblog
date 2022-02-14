import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-admin-login-dialog',
  templateUrl: './admin-login-dialog.component.html',
  styleUrls: ['./admin-login-dialog.component.scss'],
})
export class AdminLoginDialogComponent implements OnInit {
  constructor(
    private homeService: HomeService,
    private router: Router,
    private messageService: MessageService,
    private dialogRef: MatDialogRef<AdminLoginDialogComponent>
  ) {}

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
      if (res?.id !== null) {
        this.router.navigate([`admin/${res?.id}`]);
        this.dialogRef.close();
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: res?.message,
        });
      }
    });
  }
}
