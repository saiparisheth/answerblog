import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { MaterialModule } from './material.module';
import { PrimengModule } from './primeng.module';
import { RecentlyUpdatedComponent } from './home/recently-updated/recently-updated.component';
import { CoursesComponent } from './home/courses/courses.component';
import { AdminLoginDialogComponent } from './admin-login-dialog/admin-login-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeService } from './home/home.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { MessageService } from 'primeng/api';
import { EditDetailComponent } from './admin/edit-detail/edit-detail.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RecentlyUpdatedComponent,
    CoursesComponent,
    AdminLoginDialogComponent,
    AdminComponent,
    EditDetailComponent,
    AddAdminComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HomeService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
