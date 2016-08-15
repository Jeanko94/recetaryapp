import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
  },
  model:function() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      recepy: this.store.createRecord('recepy'),
      ingredients: this.store.findAll('ingredient')
    });
  },
  setupController:function(controller,model){
    this._super(controller,model);

    controller.set('newRecepy',model.recepy);
    controller.set('categories',model.categories);
    controller.set('ingredients',model.ingredients);
    controller.set('title','Create a new Recipe');
    controller.set('buttonLabel','Create');
  },
  renderTemplate(){
    this.render('recepies/form');
  },
  actions: {
    saveRecepy(newRecepy,category) {
      newRecepy.set('category',category);
      newRecepy.save().then(
        () => category.save(),
        this.transitionTo('recepies'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
