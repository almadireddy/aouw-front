import Ember from 'ember';

export default Ember.Component.extend({
  quote: null,

  init() {
    this._super(...arguments);
    let literature = this.get('literature');
    let rand = Math.random() * literature.content.length;
    
    this.set('quote', literature.content[Math.floor(rand)].__data.quote);
  },

  actions: {
    imageClicked() {
      this.sendAction('show', this.get('quote'), this.get('photo').get('nypl'));
    }
  }
});
