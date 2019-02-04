import { Component, OnInit } from '@angular/core';
import { Recipes } from '../shared/recipes.model';
import { Ingredients } from '../shared/ingredient.model';
import {Router, ActivatedRoute, RouterLink} from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  ingredients: Ingredients[]= [
    new Ingredients(1,'Sugar', 2, 'cups' , 20, 40, 60),
    new Ingredients(2,'Custurd Powder', 2, 'spoons', 20, 20, 40),
    new Ingredients(3,'Carrots', 0.5, 'kg', 25,35,60 ),
    new Ingredients(4,'Basil seeds',3, 'spoons', 20, 15, 35),
    new Ingredients(5,'semya', 0.5, 'kg', 15, 20, 35),
  ]
  recipes: Recipes[] =[
    new Recipes( 1,'Gulab jamun','https://du7ybees82p4m.cloudfront.net/56a288e117d3f8.50310584.jpg?width=910&height=512',['Take 1-cup sugar, 3 green cardamom pods, 1½ cups water in a deep pot or pan.','Heat it over medium flame and cook around 8-10 minutes and that acquires proper consistency. When sugar syrup is ready, turn off the flame.','Take 1/2 cup milk powder, 1 tablespoon maida and 1/8 teaspoon baking soda in a wide mouthed bowl and mix it well by adding some milk','Grease your palms with oil and divide mixture into marble sized small portions','Heat the ghee or oil for deep frying theese small portions','after they appear in golden color, take them from the kadai','Add theese jamuns in the syrup and let them soak in the syrup for atleast 1hr','Serve them.']),
    new Recipes( 2, 'Fruit Salad', 'https://i2.wp.com/bhavnaskitchen.com/wp-content/uploads/2013/10/CustardFruitSaladSmall.png?fit=614%2C363&ssl=1',['Mix 1/2 cup milk, custard powder in a bowl. Mix well to prevent lumps formation.','Heat 2½ cups milk in a pan over low flame. Add milk-custard mixture (prepared in step 1) and sugar. Stir continuously and bring it to a boil over medium flame','Cook until milk becomes thick or for around 8-10 minutes.','Turn off the flame  and transfer it to a bowl. Let it cool at room temperature and then place it in the refrigerator to chill for at least 1-2 hours.', 'Add some chopped fruits-Banana, Grapes, Pomogranate, Apple, Grapes etc as you wish', 'Mix them and serve it.']),
    new Recipes( 3, 'Halwa', 'https://5.imimg.com/data5/OI/JN/MY-30891409/gajar-halwa-500x500.jpg?width=910&height=512', ['Boil milk in a pan','Add grated carrots and stir', 'Cook until the milk get evoporated, keep stirring and avoid burning', 'Add sugar and stir', 'cook until half moisture evoporates', 'add ghee and stir, continue stirring', 'garnish with nuts and cashew.']),
    new Recipes( 4, 'Falooda', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYvhfkpgbAnzyxvcX9ybH3t7oNKpRlZH6k18-pZ6vVH6pNC_FNg', ['Take two glasses, add 2 table spoons of soaked basil seeds', 'Then on top add cooked falooda sev', 'Add one table spoon of rose syrup','Add milk in each glass','Add scoop of icecream', 'Garnish with nuts.']),
    new Recipes( 5, 'Kheer', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbI0HQ6OalYPlK7msfy18qENrtnBzezzF0SnP0Zq3CjKMIjwt', ['Grind blanched almonds with 1/4 cup water and make a smooth paste.', 'Heat 1 tablespoon ghee in a non-stick pan and add almonds paste.', 'Cook it over low flame while stirring constantly until light brown, approx 5-7 minutes.', 'Add milk, mix well and bring it to boil over high flame.', 'When it starts boiling, reduce flame to medium and add sugar, saffron strands and cardamom powder.', 'Cook for 4-5 minutes while stirring continuously. Remove pan from flame and let it cool at room temperature.', 'Place this kheer bowl in refrigerator, and serve it after 1hr.']),
  ]
  recipe_id : number;
  recipe_detail : any;
  ingredient : any;

  constructor(public router:Router, activatedRoute: ActivatedRoute) { 
    activatedRoute.queryParams.subscribe(params => {
      if (params['id'] != null) {
          this.recipe_id = Number.parseInt(params['id']);
      }
    });
  }

  ngOnInit() {
    for(var x of this.recipes){
      for(var y of this.ingredients){
        if(this.recipe_id == x.id && this.recipe_id == y.id){
          this.recipe_detail = x;
          this.ingredient = y;
        }
      }
    }
  }
  back() {
    this.router.navigate(['/recipe-list']);
  }

}
