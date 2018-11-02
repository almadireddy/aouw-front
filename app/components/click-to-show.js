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
      let imageWidth = document.getElementById('modal-image').clientWidth;
      document.getElementById('description').getElementsByClassName('info-data')[0].innerText = Ember.String.htmlSafe(this.get('title')) + ', ' + this.get('author');
      document.getElementById('description').style.width = imageWidth + 'px';
      document.getElementById('quote').style.width = imageWidth + 'px';
      document.getElementById('quote-container').style.width = imageWidth + 'px';
      document.getElementById('info-section').style.width = imageWidth + 'px';
    }
  }
});
