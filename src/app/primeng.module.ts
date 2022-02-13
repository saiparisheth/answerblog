import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [ButtonModule, InputTextModule],
  exports: [ButtonModule, InputTextModule],
})
export class PrimengModule {}
