import Ember from 'ember';

export default Ember.Component.extend({
  quote: null,
  showQuote: false,
  classNameBindings: ['showQuote'],

  init() {
    this._super(...arguments);
    let literature = this.get('literature');
    let rand = Math.random() * literature.content.length;
    
    this.set('quote', literature.content[Math.floor(rand)]);
  },

  actions: {
    imageClicked(e) {
      if (!this.showQuote) {
        e.target.lastChild.innerText = this.get('quote').__data.quote;
        this.set('showQuote', true);
      }
      else {
        this.set('showQuote', false);
      }
    }
  }
});
