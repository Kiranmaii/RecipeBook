import { PipeTransform, Pipe } from '@angular/core';
import { Recipes } from '../shared/recipes.model';

@Pipe({
    name: 'Filter'
})

export class RecipeFilterPipe implements PipeTransform {
    transform(recipe: Recipes[], search: string): Recipes[] {
        if (!recipe || !search){
            return recipe;
        }

        return recipe.filter(recipes=>
            recipes.name.toLowerCase().indexOf(search.toLowerCase())  !== -1);
        }
}