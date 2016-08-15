import Ember from 'ember';

export default Ember.Component.extend({
  categories: [],
  recepy: null,
  buttonLabel:'Save',
  selectedCategory: null,
  actions:{
    buttonClicked(param1,param2){
      let category = this.get('categories').find((record) => record.id === param2);
      this.sendAction('action',param1,category);
    }
  }
});
