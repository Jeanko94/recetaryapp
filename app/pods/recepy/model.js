import DS from 'ember-data';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { belongsTo } from 'ember-data/relationships';
import Model from 'ember-data/model';


export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  ingredients: DS.hasMany('ingredient'),
  category: DS.belongsTo('category')
});
