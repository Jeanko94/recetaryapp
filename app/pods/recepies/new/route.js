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
      newRecepy: this.store.createRecord('recepy')
    });
  },
  setupController:function(controller,model){
    this._super(controller,model);

    controller.set('newRecepy',model.newRecepy);
    controller.set('categories',model.categories);
    controller.set('title','Create a new Recipe');
    controller.set('buttonLabel','Create');
  },
  renderTemplate(){
    this.render('recepies/form');
  },
  actions: {
    saveCategory(category, recepy){
      recepy.set('category',category);
    },
    saveRecepy(newRecepy,category) {
      newRecepy.category = category;
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
