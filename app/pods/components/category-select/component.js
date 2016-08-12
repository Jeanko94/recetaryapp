import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'select',
  classNames: ['form-control'],
  categories: [],
  recepy: null,

  change(event) {
    const selectedCategoryId = event.target.value;
    const category = this.get('categories').find((record) => record.id === selectedCategoryId);

    this.sendAction('action', category);
  }
});
