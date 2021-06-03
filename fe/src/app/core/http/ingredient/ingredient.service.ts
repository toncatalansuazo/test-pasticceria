import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConfigurationEndpoint } from 'src/app/configuration/configuration-endpoint';
import { Ingredient } from 'src/app/models/product';
import { ingredientsMock } from '../ingredient-mock-reponse.spec';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  loadIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(ConfigurationEndpoint.getIngredientsEndpoint());
  }

  saveIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(ConfigurationEndpoint.getIngredientsEndpoint(), ingredient);
  }

  updateIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.put<Ingredient>(ConfigurationEndpoint.getIngredientsEndpoint(), ingredient);
  }

  deleteIngredient(ingredientId: number): Observable<Ingredient> {
    return this.http.delete<Ingredient>(`${ConfigurationEndpoint.getIngredientsEndpoint()}?id=${ingredientId}`);
  }

  constructor(private http: HttpClient) {}
}
