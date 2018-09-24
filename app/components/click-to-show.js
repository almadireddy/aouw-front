import Ember from 'ember';

export default Ember.Component.extend({
  showingInfo: false,
  classNameBindings: ['showingInfo'],

  init() {
    this._super(...arguments);
  },
  
  actions: {
    clicked: function(e) {
      if (this.get('showingInfo')) {
        this.set('showingInfo', false);
      }
      else {
        this.set('showingInfo', true);
      }
    }
  }
});
