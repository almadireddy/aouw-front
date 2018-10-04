import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingModal: false,
  quote: null,
  imgSrc: null,
  currentPhoto: null,

  
  actions: {
    showPictureModal(quote, nypl, photo) {
      this.set('imgSrc', 'images/'+ nypl +'.jpeg');
      this.set('quote', quote);
      this.set('isShowingModal', true);
      this.set('currentPhoto', photo);
    },
    
    toggleModal() {
      this.toggleProperty('isShowingModal') 
    },

    showQuoteOnImage() {
      let imageWidth = document.getElementById('modal-image').clientWidth;
      document.getElementById('quote').style.width = imageWidth + 'px';
      document.getElementById('quote-container').style.width = imageWidth + 'px';
      document.getElementById('info-section').style.width = imageWidth + 'px';
      document.getElementById('quote').innerText = this.get('quote')
    }
  }
});
