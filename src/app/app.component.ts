import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { combineAll, map, startWith } from 'rxjs/operators';
import { db, Ingredient, Receipt } from '../../db/db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  receipts: Receipt[] = db.receipts;
  filteredReceipts: Observable<Receipt[]>;
  myForm: FormGroup;
  ingredients: Ingredient[] = db.ingredients;
  ingredientsList = {};

  ngOnInit() {
    this.myForm = new FormGroup({
      'plato1': new FormControl(null),
      'plato2': new FormControl(null),
      'plato3': new FormControl(null),
      'plato4': new FormControl(null),
      'plato5': new FormControl(null),
      'plato6': new FormControl(null),
      'plato7': new FormControl(null),
      'plato8': new FormControl(null),
    });

    this.myForm.valueChanges.subscribe((value) => {
      this.ingredientsList = {};
      this.calculateIngredients();
    })
  }

  private calculateIngredients() {
    for (const plato in this.myForm.value) {
      if (Object.prototype.hasOwnProperty.call(this.myForm.value, plato)) {
        if (this.myForm.value[plato]) {
          for (let index = 0; index < this.myForm.value[plato].ingredients.length; index++) {
            const ingredientFromRecipe = this.myForm.value[plato].ingredients[index];
            if (this.ingredientsList[ingredientFromRecipe.ingredientsId]) {
              this.ingredientsList[ingredientFromRecipe.ingredientsId].value += ingredientFromRecipe.quantity.value;
            } else {

              this.ingredientsList[ingredientFromRecipe.ingredientsId] = {
                name: this.getIngredientById(ingredientFromRecipe.ingredientsId).name,
                value: ingredientFromRecipe.quantity.value,
                unit: ingredientFromRecipe.quantity.unit,
                url: this.getIngredientById(ingredientFromRecipe.ingredientsId).url
              }
            }
          }
        }

      }
    }
    console.log(this.ingredientsList);

  }

  private getIngredientById(id: number): Ingredient {
    return this.ingredients.find((value) => value.id === id);
  }

}


// Iterar por todos los platos
//// Iterar por todos los ingredientes
///// Sumar las cantidad de ese ingrediente a un clave valor, donde clave sea el id


