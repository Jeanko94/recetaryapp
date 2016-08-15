import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  quantity: DS.attr('string'),
  imgLink: DS.attr('string'),
  recepy: DS.hasMany('recepy', {async: true}),
  isValid: Ember.computed.notEmpty('name')
});
