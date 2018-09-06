import DS from 'ember-data';

export default DS.Model.extend({
  quote: DS.attr('string'),
  author: DS.attr('string'),
  title: DS.attr('string'),
  startPage: DS.attr('number'),
  endPage: DS.attr('number'),
  originalPublicationDate: DS.attr('number'),
  originalPublisher: DS.attr('string'),
  publisher: DS.attr('string'),
  currentCitation: DS.attr('number'),
  pseudonym: DS.attr('string'),
  photos: DS.belongsTo('collection')
});
