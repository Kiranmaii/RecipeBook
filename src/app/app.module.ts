import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeService } from '../../src/app/recipe.service';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import {RecipeFilterPipe} from './recipe-list/recipe-filter.pipe';
import { from } from 'rxjs';


const appRoutes: Routes = [
  { path: '',
  redirectTo: '/recipe-list',
  pathMatch: 'full'
},
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'new-recipe', component: NewRecipeComponent },
  { path: 'recipe-details', component: RecipeDetailsComponent}
 
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    NewRecipeComponent,
    RecipeDetailsComponent,
    RecipeFilterPipe,
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
   
  ],
  exports: [RouterModule],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }