import Ember from 'ember';

export default Ember.Component.extend({
  showingInfo: false,
  quote: null,

  init() {
    this._super(...arguments);
    let literature = this.get('model.literature');
    let rand = Math.random() * literature.content.length;

    let imageWidth = document.getElementById('modal-image').clientWidth;
    document.getElementById('quote').style.width = imageWidth + 'px';
    document.getElementById('quote-container').style.width = imageWidth + 'px';
    document.getElementById('info-section').style.width = imageWidth + 'px';
    
    this.set('quote', literature.content[Math.floor(rand)].__data.quote);
  },
  
  actions: {
    clicked: function(e) {
      console.log(this.get('attribute'))
      document.getElementById('quote').innerText = this.get('quote')
    }
  }
});
