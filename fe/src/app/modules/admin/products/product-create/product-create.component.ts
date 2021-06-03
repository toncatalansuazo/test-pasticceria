import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, first, map } from 'rxjs/operators';
import { Ingredient, Product } from 'src/app/models/product';
import { fromAdmin, fromAdminActions, fromAdminSelectors } from '../../store';

@Component({
  selector: 'cs-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  productFG: FormGroup;
  ingredients: Ingredient[];
  ingredientsSelected: Ingredient[] = [];
  currentProduct: Product;
  isEditing: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromAdmin.State>,
    private active: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const url = this.active.snapshot.url;
    this.isEditing = url[0].path === 'edit';
    if (this.isEditing) {
      this.initFormWithProduct();
    } else {
      this.initForm();
    }
  }

  initFormWithProduct() {
    this.store.select(fromAdminSelectors.getCurrentProduct).pipe(
      first()
    ).subscribe((product) => {
      console.log({product});
      this.currentProduct = <Product>product;
      const ingredients: Ingredient[] = (<Product>product).ingredients;
      let controls = [];
      for (const ingredient of ingredients) {
        controls.push(this.addIngredientFC(ingredient))
      }
      this.productFG = this.formBuilder.group({
        'name': [product?.name, [Validators.min(3)]],
        'img': [product?.img, [Validators.min(1)]],
        'price': [product?.price, [Validators.min(3)]],
        'stock': [product?.stock, [Validators.min(1)]],
        'ingredients': this.formBuilder.array(controls)
      });
    })
  }

  listenIngredients() {
    this.store.select(fromAdminSelectors.getIngredients).pipe(
      filter(ingredients => Boolean(ingredients.length)),
      first()
    ).subscribe(ingredients => {
      for (const ingredient of ingredients) {
        this.getIngredients().push(this.addIngredientFC(ingredient));
      }
      this.ingredients = ingredients;
    });
  }

  addIngredientFC(ingredient: Ingredient): FormControl {
    let formControl =  this.formBuilder.control(ingredient.id);
    (<any>formControl).ingredient = ingredient;
    return formControl;
  }

  loadIngredients() {
    this.store.dispatch(fromAdminActions.loadIngredients())
  }

  getIngredients(): any {
    return this.productFG && <FormArray> this.productFG.get("ingredients");
  }

  onChangeIngredient($event: any) {
    const checked: boolean = $event.checked;
    const ingredient: Ingredient = $event.source.value;
    if (checked) {
      this.ingredientsSelected.push(ingredient);
    } else {
      const index = this.ingredientsSelected.findIndex(ingre => ingre.id === ingredient.id);
      index && this.ingredientsSelected.splice(index, 1);
    }
  }

  onSave() {
    this.checkIngredients();
    const {name, img, price, stock, ingredients} = this.productFG.value;
    let product: Product = {
      name,
      img,
      price,
      stock,
      createdAt: new Date().getTime(),
      expired: false,
      ingredients: this.ingredientsSelected
    };
    if (this.isEditing){
      product = {...this.currentProduct, ...product};
      this.store.dispatch(fromAdminActions.updateProduct({product}))
    } else {
      this.store.dispatch(fromAdminActions.saveProduct({ product }));
    }
  }
  checkIngredients() {
    if (this.ingredientsSelected.length < 1) {
      this.snackBar.open('you must select at least one ingredient', 'ok' , {duration: 5000});
    }
  }

  private initForm() {
    this.productFG = this.formBuilder.group({
      'name': ['some name', [Validators.min(3)]],
      'img': ['some url to image', [Validators.min(1)]],
      'price': [234, [Validators.min(3)]],
      'stock': [234, [Validators.min(1)]],
      'ingredients': this.formBuilder.array([])
    });
    this.loadIngredients();
    this.listenIngredients();
  }



}
