import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://aouw.herokuapp.com/api/'
});
