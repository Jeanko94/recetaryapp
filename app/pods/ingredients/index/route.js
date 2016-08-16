import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('ingredient');
  },
  actions: {
    deleteIngredient(ingredient) {

      if(!ingredient.hasRecepies){
        let confirmation = confirm('Are you sure?');

        if (confirmation) {
          ingredient.destroyRecord();
        }
      }else{
        alert('You can`t delete this ingredient because is in a recepy');
      }
    }
  }
});
