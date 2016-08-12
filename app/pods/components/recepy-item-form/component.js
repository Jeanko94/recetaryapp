import Ember from 'ember';

export default Ember.Component.extend({
  categories: [],
  recepy: null,
  buttonLabel:'Save',
  selectedCategory: null,
  actions:{
    buttonClicked(param1,param2){
      this.sendAction('action',param1,param2);
    },
    saveCategory(category){
       this.set('selectedCategory', category);
       confirm(category.name);
    }
  }
});
