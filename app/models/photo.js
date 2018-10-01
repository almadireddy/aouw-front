import DS from 'ember-data';

export default DS.Model.extend({
  uuid: DS.attr('string'),
  permalink: DS.attr('string'),
  nypl: DS.attr('string'),
  photographer: DS.attr('string'),
  year: DS.attr('string'),
  location: DS.attr('string'),
  description: DS.attr('string')
});
