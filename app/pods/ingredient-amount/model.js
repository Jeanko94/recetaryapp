import DS from 'ember-data';

export default DS.Model.extend({
  recepy: DS.belongsTo('recepy', {async: true}),
  ingredient: DS.belongsTo('ingredient', {async: true}),
  quantity: DS.attr('string'),
  type: DS.attr('string')
});
