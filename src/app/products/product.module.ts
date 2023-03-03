import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditInfoComponent } from './product-edit/components/product-edit-info/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/components/product-edit-tags/product-edit-tags.component';

@NgModule({
  imports: [SharedModule, ProductRoutingModule],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent,
  ],
})
export class ProductModule {}
