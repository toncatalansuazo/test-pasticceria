import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './ui/template/template.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { DiscountPipe } from './pipes/sale-price.pipe';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TemplateComponent,
    ProductListComponent,
    ProductDetailComponent,
    DiscountPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TemplateComponent,
    ProductListComponent,
    DiscountPipe,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
