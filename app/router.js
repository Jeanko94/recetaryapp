import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('recepies', function() {
    this.route('categories', function() {
      this.route('new');
    });
    this.route('ingredients');
  });
});

export default Router;
