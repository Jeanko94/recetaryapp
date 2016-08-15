import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('recepies', function() {
    this.route('list',{path: '/:category_id/list'});
    this.route('view', { path: '/:recepy_id/view' });
    this.route('new');
    this.route('edit', { path: '/:recepy_id/edit' });
  });
  this.route('categories', function() {
    this.route('new');
    this.route('edit', { path: '/:category_id/edit' });
  });
  this.route('login');
  this.route('register');
  this.route('ingredients', function() {
    this.route('new');
    this.route('edit', { path: '/:ingredient_id/edit' });
  });
});

export default Router;
