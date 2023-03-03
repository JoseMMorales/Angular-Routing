import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './home-welcome/welcome.component';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [SharedModule, WelcomeRoutingModule],
})
export class WelcomeModule {}
