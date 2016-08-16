import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  displayName: Ember.computed('name','description',function(){
    return this.get('description') + ' ' + this.get('name');
  }),
  hasRecepies: Ember.computed.notEmpty('recepies'),
  imgLink: DS.attr('string'),
  recepies: DS.hasMany('recepy', {async: true}),
  isValid: Ember.computed.notEmpty('name')
});
