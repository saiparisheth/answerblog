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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RecentlyUpdatedComponent,
    CoursesComponent,
    AdminLoginDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
