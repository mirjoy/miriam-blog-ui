import DS from 'ember-data';

const {
  attr,
  belongsTo
} = DS;

export default DS.Model.extend({
  title: attr('string'),
  post: attr('string'),

  user: belongsTo('user'),
});
