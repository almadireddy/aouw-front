import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingModal: false,
  quote: null,
  imgSrc: null,
  currentPhoto: null,

  actions: {
    showPictureModal(quote, nypl, photo) {
      this.set('imgSrc', 'https://images.nypl.org/index.php?id='+ nypl +'&t=w');
      this.set('quote', quote);
      this.set('isShowingModal', true);
      this.set('currentPhoto', photo);
    },
    
    toggleModal() {
      this.toggleProperty('isShowingModal') 
    }
  }
});
