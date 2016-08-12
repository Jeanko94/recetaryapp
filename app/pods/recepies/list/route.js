import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      recepies:this.store.findAll('recepy'),
      categories: this.store.findAll('category')
    });
  },

  setupController(controller,model){
    controller.set('recepies',model.recepies);
    controller.set('categories',model.categories);
  }
});
