import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminBodyComponent } from './admin-body/admin-body.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { fromAdmin, fromAdminEffects } from './store';
import { AdminEffects } from './store/admin.effects';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { IngredientCreateComponent } from './ingredients/ingredient-create/ingredient-create.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { IngredientListComponent } from './ingredients/ingredient-list/ingredient-list.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminBodyComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    ProductCreateComponent,
    IngredientCreateComponent,
    ProductListComponent,
    IngredientListComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AdminRoutingModule,
    StoreModule.forFeature(fromAdmin.adminFeatureKey, fromAdmin.reducer),
    EffectsModule.forFeature([AdminEffects])
  ]
})
export class AdminModule { }
