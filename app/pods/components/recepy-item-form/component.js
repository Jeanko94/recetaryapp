import Ember from 'ember';

export default Ember.Component.extend({
  categories: [],
  recepy: null,
  buttonLabel:'Save',
  selectedCategory: null,
  ingredients: null,
  ingredientQuantity: '',
  selectedIngredients: '',
  actions:{
    buttonClicked(param1,param2){
      let category = this.get('categories').find((record) => record.id === param2);
      param1.ingredients = this.get('ingredients');
      this.sendAction('action',param1,category);
    }
  }
});
