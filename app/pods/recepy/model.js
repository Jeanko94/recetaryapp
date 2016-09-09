import DS from 'ember-data';
import Ember from 'ember';


export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  imgLink: DS.attr('string'),
  ingredients: DS.hasMany('ingredient-amount', {async: true}),
  category: DS.belongsTo('category', {async: true}),
  isValid: Ember.computed.notEmpty('name')
});
