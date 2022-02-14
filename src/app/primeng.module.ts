import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [ButtonModule, InputTextModule, ToastModule],
  exports: [ButtonModule, InputTextModule, ToastModule],
})
export class PrimengModule {}
