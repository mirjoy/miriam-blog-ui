import DS from 'ember-data';

const {
  attr,
} = DS;

export default DS.Model.extend({
  first_name: attr('string'),
  last_name: attr('string'),
  email: attr('string'),
  role: attr('string'),
  password: attr('string'),
  hashed_password: attr('string'),
});
