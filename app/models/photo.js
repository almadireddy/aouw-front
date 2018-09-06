import DS from 'ember-data';

export default DS.Model.extend({
  uuid: DS.attr('string'),
  permalink: DS.attr('string'),
  nypl: DS.attr('number'),
  photographer: DS.attr('string'),
  year: DS.attr('number'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  collection: DS.belongsTo('collection'),
  literature: DS.belongsTo('literature')
});
