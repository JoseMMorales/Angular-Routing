import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './core/product-data';

import { AppComponent } from './app.component';

/* Feature Modules */
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 2000 }),
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
