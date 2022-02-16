import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss'],
})
export class AddAdminComponent implements OnInit {
  form: FormGroup;
  isLoading = false;

  constructor(
    private dialogRef: MatDialogRef<AddAdminComponent>,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._initForm();
  }

  onSubmit() {
    this.isLoading = true;
    if (this.form.invalid) {
      return;
    }

    const adminForm = {
      adminName: this.form.get('adminName').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value,
    };

    this.adminService.addNewAdmin(adminForm).subscribe((res) => {
      if (res.admin._id) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Admin Added Successfully!',
        });
        window.setTimeout(() => {
          this.dialogRef.close();
          this.isLoading = false;
        }, 2500);
      } else {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res.message,
        });
        this.isLoading = false;
      }
    });
  }

  private _initForm() {
    this.form = this.formBuilder.group({
      adminName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
