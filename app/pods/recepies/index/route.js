import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('recepy');
  },
  
  actions: {
    deleteRecepy(recepy) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        recepy.get('ingredients').then((recepyIngredients) => {
          recepyIngredients.removeObject(recepy);
          recepyIngredients.save();
        });
        recepy.destroyRecord();
      }
    }
  }
});
