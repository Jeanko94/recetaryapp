import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('recepies', function() {
    this.route('categories', function() {
      this.route('new');
      this.route('edit', { path: '/:category_id/edit' });
    });
    this.route('ingredients');
  });
  this.route('login');
  this.route('register');
});

export default Router;
