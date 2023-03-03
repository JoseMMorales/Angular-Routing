import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditInfoComponent } from './product-edit/components/product-edit-info/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/components/product-edit-tags/product-edit-tags.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditGuard } from './product-edit/product-edit.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductResolver } from './services/product-resolver.service';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProductListComponent },
      {
        path: ':id',
        component: ProductDetailComponent,
        resolve: { resolvedData: ProductResolver },
      },
      {
        path: ':id/edit',
        component: ProductEditComponent,
        canDeactivate: [ProductEditGuard],
        resolve: { resolvedData: ProductResolver },
        children: [
          {
            path: '',
            redirectTo: 'info',
            pathMatch: 'full',
          },
          {
            path: 'info',
            component: ProductEditInfoComponent,
          },
          {
            path: 'tags',
            component: ProductEditTagsComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
