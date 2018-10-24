import Ember from 'ember';

export default Ember.Component.extend({
  showingInfo: false,
  quote: null,
  author: null,
  title: null,
  year: null,

  init() {
    this._super(...arguments);
    let literature = this.get('model.literature');
    let rand = Math.random() * literature.content.length;
    let entry = literature.content[Math.floor(rand)].__data;
    this.set('quote', entry.quote);
    this.set('author', entry.author);
    this.set('title', entry.title);
  },
  
  actions: {
    clicked: function() {
      document.getElementById('quote').innerText = this.get('quote');
      document.getElementById('description').getElementsByClassName('info-data')[0].innerText = this.get('title') + ', ' + this.get('author');
    }
  }
});
