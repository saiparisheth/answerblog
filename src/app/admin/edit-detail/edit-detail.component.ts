import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.scss'],
})
export class EditDetailComponent implements OnInit {
  form: FormGroup;
  isLoading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditDetailComponent>,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._initForm();
    if (this.data._id) {
      this._setFormValues();
    }
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

    this.adminService
      .updateAdminDetail(adminForm, this.data._id)
      .subscribe((res) => {
        if (res.admin._id) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Updated Successfully!',
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

  private _setFormValues() {
    this.form.get('adminName').setValue = this.data.adminName;
    this.form.get('email').setValue = this.data.email;
    this.form.get('password').setValue = this.data.password;
  }
}
