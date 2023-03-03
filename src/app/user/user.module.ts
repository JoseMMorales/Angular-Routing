import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import { LoginComponent } from './user-login/login.component';

@NgModule({
  imports: [SharedModule, UserRoutingModule],
  declarations: [LoginComponent],
})
export class UserModule {}
