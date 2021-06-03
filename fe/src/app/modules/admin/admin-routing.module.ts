import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AdminComponent } from './admin.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { IngredientListComponent } from './ingredients/ingredient-list/ingredient-list.component';
import { IngredientCreateComponent } from './ingredients/ingredient-create/ingredient-create.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'create',
        component: ProductCreateComponent
      },
      {
        path: 'edit',
        component: ProductCreateComponent
      }
    ]
  },
  {
    path: 'ingredients',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: IngredientListComponent
      },
      {
        path: 'create',
        component: IngredientCreateComponent
      },
      {
        path: 'edit',
        component: IngredientCreateComponent
      }
    ]
  }
  // {
  //   path: 'products',
  //   component: AdminComponent,
  //   children: [
  //     {path: '', redirectTo: 'create'},
  //     {
  //       path: 'create',
  //       component: ProductCreateComponent
  //     }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
