import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipes } from '../shared/recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  search: string;
  recipeService: RecipeService;
  recipes: Recipes[] =[
    new Recipes( 1,'Gulab jamun','https://du7ybees82p4m.cloudfront.net/56a288e117d3f8.50310584.jpg?width=910&height=512',''),
    new Recipes( 2, 'Fruit Salad', 'https://i2.wp.com/bhavnaskitchen.com/wp-content/uploads/2013/10/CustardFruitSaladSmall.png?fit=614%2C363&ssl=1',''),
    new Recipes( 3, 'Halwa', 'https://5.imimg.com/data5/OI/JN/MY-30891409/gajar-halwa-500x500.jpg?width=910&height=512',''),
    new Recipes( 4, 'Falooda', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYvhfkpgbAnzyxvcX9ybH3t7oNKpRlZH6k18-pZ6vVH6pNC_FNg', ''),
    new Recipes( 5, 'Kheer', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbI0HQ6OalYPlK7msfy18qENrtnBzezzF0SnP0Zq3CjKMIjwt',''),
  ]

  constructor(private router : Router, recipeService: RecipeService) { 
  }
  // SelectedRecipes: any;
  // AllRecipes: any = [
  //   {name: "Dessert", recipe: "Dessert"},
  //   {name: "Spicy", recipe:"Spicy"}
  // ]

  ngOnInit() {
  }

  onNew(){
    this.router.navigate(['/new-recipe']);
  }

  recipeDetails(id){
    this.router.navigate(['/recipe-details'],{queryParams: {id: id}});
  }

}
