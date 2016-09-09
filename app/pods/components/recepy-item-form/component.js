import Ember from 'ember';

export default Ember.Component.extend({
  categories: [],
  ingredientAmount: null,
  recepy: null,
  buttonLabel:'Save',
  selectedCategory: null,
  selectedIngredient: null,
  ingredients: null,
  ingredientQuantity: '',
  ingredientType: '',
  selectedIngredients: [],
  actions:{
    buttonClicked(param1,param2){
      let category = this.get('categories').find((record) => record.id === param2);
      param1.ingredients = this.get('ingredients');
      this.sendAction('action',param1,category);
    },
    ingredientAdd(param1,param2,param3){
      let ingredients = this.get('selectedIngredients');
      let ingredient = this.get('ingredients').find((record) => record.id === param1);
      let ingredientAmount = this.get('ingredientAmount');
      ingredientAmount.ingredient = ingredient;
      ingredientAmount.type = param3;
      ingredientAmount.quantity = param2;
      ingredients.addObject(ingredientAmount);
      console.log(ingredient.name);
      this.set('selectedIngredient', '');
      this.set('ingredientQuantity', '');
      this.set('ingredientType','');
    }
  }
});
