import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('ingredient');
  },
  actions: {
    deleteIngredient(ingredient) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        ingredient.destroyRecord();
      }
    }
  }
});
