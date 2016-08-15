import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
  },
  model:function(params) {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      recepy: this.store.findRecord('recepy', params.recepy_id)
    });
  },
  setupController:function(controller,model){
    this._super(controller,model);

    controller.set('newRecepy',model.recepy);
    controller.set('categories',model.categories);
    controller.set('title','Edit Recipe');
    controller.set('buttonLabel','Save');
  },
  renderTemplate(){
    this.render('recepies/form');
  },
  actions: {
    saveRecepy(recepy,category) {
      recepy.get('category').then((previousCategory) => {
        previousCategory.get('recepies').then((previousCategoryRecepies) => {
          previousCategoryRecepies.removeObject(recepy);
          previousCategory.save();
        });
      });

      recepy.set('category',category);
      recepy.save().then(
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
