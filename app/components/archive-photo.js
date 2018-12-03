import Ember from 'ember';

export default Ember.Component.extend({
  quote: null,
  currentPhoto: null,
  descriptionString: null,

  init() {
    this._super(...arguments);
    let literature = this.get('literature');
    let rand = Math.random() * literature.content.length;
    let entry = literature.content[Math.floor(rand)].__data;
    this.set('quote', entry.quote);
    this.set('currentPhoto', this.get('photo'))
    this.set('descriptionString', entry.title + ', ' + entry.author)
  },

  actions: {
    imageClicked() {
      this.sendAction('show', this.get('quote'), this.get('photo').get('nypl'), this.get('photo'));
    }
  }
});
