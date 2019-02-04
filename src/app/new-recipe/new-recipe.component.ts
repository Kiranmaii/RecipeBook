import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  ingredients: Ingredients[]=[
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/recipe-list'])
  }

}
