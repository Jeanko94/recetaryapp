import Ember from 'ember';
export default Ember.Route.extend({
  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
  },
  model:function() {
    return this.store.createRecord('category');
  },
  setupController:function(controller,model){
    this._super(controller,model);

    controller.set('title','Create a new Category');
    controller.set('buttonLabel','Create');

  },
  renderTemplate(){
    this.render('categories/form');
  },
  actions: {

    saveCategory(newCategory) {
      newCategory.save().then(() => this.transitionTo('categories'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
