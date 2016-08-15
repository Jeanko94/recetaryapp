import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
  },
  model:function() {
      return this.store.createRecord('ingredient');
  },
  setupController:function(controller,model){
    this._super(controller,model);

    controller.set('title','Create a new Ingredient');
    controller.set('buttonLabel','Create');
  },
  renderTemplate(){
    this.render('ingredients/form');
  },
  actions: {
    saveIngredient(ingredient) {
      ingredient.save().then(
        this.transitionTo('ingredients'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
