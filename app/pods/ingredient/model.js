import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  displayName: Ember.computed('name','description',function(){
    return this.get('description') + ' ' + this.get('name');
  }),
  hasRecepies: Ember.computed.notEmpty('ingredientsAmount'),
  imgLink: DS.attr('string'),
  ingredientsAmount: DS.hasMany('ingredient-amount', {async: true}),
  isValid: Ember.computed.notEmpty('name')
});
