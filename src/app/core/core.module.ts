import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthService } from './auth.service';

@NgModule({
  providers: [AuthService],
  imports: [HttpClientModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
