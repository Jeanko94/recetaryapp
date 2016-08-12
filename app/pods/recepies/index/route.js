import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('recepy');
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
