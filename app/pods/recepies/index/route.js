import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('recepy', params.recepy_id);
  },
  actions: {
    deleteRecepy(recepy) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        recepy.destroyRecord();
      }
    }
  }
});
