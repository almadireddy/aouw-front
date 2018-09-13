import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingModal: false,
  quote: null,
  imgSrc: null,

  actions: {
    showPictureModal(quote, nypl) {
      this.set('imgSrc', 'https://images.nypl.org/index.php?id='+ nypl +'&t=w')
      this.set('quote', quote)
      this.set('isShowingModal', true)
    },

    toggleModal() {
      this.toggleProperty('isShowingModal')
    }
  }
});
