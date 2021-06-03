import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { Ingredient } from 'src/app/models/product';
import { fromAdmin, fromAdminActions, fromAdminSelectors } from '../../store';

@Component({
  selector: 'cs-ingredient-create',
  templateUrl: './ingredient-create.component.html',
  styleUrls: ['./ingredient-create.component.scss']
})
export class IngredientCreateComponent implements OnInit {
  ingredientFG: FormGroup;
  isEditing: boolean;
  currentIngredient: Ingredient | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromAdmin.State>,
    private active: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const url = this.active.snapshot.url;
    this.isEditing = url[0].path === 'edit';
    if (this.isEditing) {
      this.initFormWithIngredient();
    } else {
      this.initForm();
    }
  }

  initFormWithIngredient() {
    this.store.select(fromAdminSelectors.getCurrentIngredient).pipe(
      first()
    ).subscribe((ingredient) => {
      this.currentIngredient = ingredient;
      this.ingredientFG = this.formBuilder.group({
        'name': [ingredient?.name, [Validators.min(2)]]
      });
    })

  }

  private initForm() {
    this.ingredientFG = this.formBuilder.group({
      'name': ['ingredient name', [Validators.min(2)]]
    });
  }

  onSave() {
    const {name } = this.ingredientFG.value;
    let ingredient: Ingredient = {
      name
    };
    if (this.isEditing){
      ingredient = {...this.currentIngredient, ...ingredient};
      this.store.dispatch(fromAdminActions.updateIngredient({ingredient}))
    } else {
      this.store.dispatch(fromAdminActions.saveIngredient({ ingredient }));
    }
  }

}
