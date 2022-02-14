import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminLoginDialogComponent } from 'src/app/admin-login-dialog/admin-login-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onClicked() {
    this.dialog.open(AdminLoginDialogComponent, {
      width: '330px'
    });
  }
}
