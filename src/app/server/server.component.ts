import { Component } from '@angular/core';
import { Food } from '../../shared/Food.model';
import { Menu } from '../../shared/Food.model';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

    foods: Food[] = [new Food('Beef', 'assets/images/beef.jpg'),
      new Food('Chicken', 'assets/images/chicken.jpg'),
      new Food('Egg', 'assets/images/egg.jpg'),
      new Food('Peanut', 'assets/images/penaut.jpg'),
      new Food('Potato', 'assets/images/potato.jpg'),
      new Food('Tomato', 'assets/images/tomato.jpg'),
      new Food('Pepper', 'assets/images/pepper.jpg'),
      new Food('Dry Pepper', 'assets/images/dry_pepper.jpg')];

    IngredientsName = ['ChickenPeanut', 'BeefPotato', 'BeefPepper', 'EggTomato',
    'ChickenDry Pepper'];

    menus: Menu[] = [new Menu('Kung Pao chicken', 'ChickenPeanut', 'assets/images/Kung Pao chicken.jpg'),
      new Menu('Braised Beef with Potatoes', 'BeefPotato', 'assets/images/Braised Beef with Potatoes.jpg'),
      new Menu('Black Pepper Beef', 'BeefPepper', 'assets/images/Black Pepper Beef.jpeg'),
      new Menu('Scrambled Eggs with Tomato', 'EggTomato', 'assets/images/Scrambled Eggs with Tomato.jpg'),
      new Menu('Spicy chicken', 'ChickenDry Pepper', 'assets/images/Spicy chicken.jpg')];

    MealName = 'Your Meal: ';
    MealUrl = 'assets/images/najianyujian.jpg';
    Ingredients = [];

    Chooseingredients(name) {
      if (this.Ingredients.length > 1) {
        return;
      }
      this.Ingredients.push(name);
      this.Ingredients.sort();
    }

    OrderMenu() {
      this.MealName = 'test';
      if (this.Ingredients.length > 1) {
          const idx = this.IngredientsName.indexOf(this.Ingredients.join(''));
          if (idx === -1) {
            this.MealName = 'Sorry 臣妾做不到';
            this.MealUrl = 'assets/images/najianyujian.jpg';
          } else {
            this.MealName = this.menus[idx].name;
            this.MealUrl = this.menus[idx].URL;
          }
      } else {
        this.MealName = 'You need one more Ingredient';
      }
    }

    ResetMeal() {
      this.Ingredients = [];
      this.MealName = 'Your Meal';
      this.MealUrl = 'assets/images/najianyujian.jpg';
    }

  /*
    serverId = 10;
    serverStatus = 'offLine';
    counter = 0;
    isLogin = false;
    userName: string;
    students: Student[] = [new Student('Bill Gates', 'Computer Science'),
                           new Student('Steve Jobs', 'Computer Science'),
                           new Student('Elon Musk', 'Computer Science')];

    getServerStatus() {
      return this.serverStatus;
    }

    counterPlus() {
     this.counter ++;
    }

    resetCounter() {
      this.counter = 0;
    }

    login() {
      this.isLogin = true;
    }

    signOut() {
      this.isLogin = false;
    }

    // Event Binding
    onUpdateUserName(event: Event) {
      this.userName = (<HTMLInputElement>event.target).value;
    }*/
}
