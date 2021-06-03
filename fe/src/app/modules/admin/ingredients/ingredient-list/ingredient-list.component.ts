import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/models/product';
import { fromAdmin, fromAdminActions, fromAdminSelectors } from '../../store';

@Component({
  selector: 'cs-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  ingredients$: Observable<Ingredient[]>;
  constructor(private store: Store<fromAdmin.State>,
    private router: Router) { }

  ngOnInit(): void {
    this.loadIngredients();
    this.listenIngredients();
  }

  onSelectIngredient($event: Ingredient) {
    this.store.dispatch(fromAdminActions.setCurrentIngredient({ ingredient: $event}));
  }

  onEdit(ingredient: Ingredient) {
    this.setCurrentIngredient(ingredient);
    this.router.navigate(['/admin/ingredients/edit']);
  }

  onDelete(ingredient: Ingredient) {
    const ingredientId: number = <number>ingredient.id;
    this.store.dispatch(fromAdminActions.deleteIngredient({ ingredientId }));
  }

  setCurrentIngredient($event: Ingredient) {
    this.store.dispatch(fromAdminActions.setCurrentIngredient({ ingredient: $event}));
  }

  private loadIngredients() {
    this.store.dispatch(fromAdminActions.loadIngredients());
  }

  private listenIngredients() {
    this.ingredients$ = this.store.select(fromAdminSelectors.getIngredients);
  }

}
