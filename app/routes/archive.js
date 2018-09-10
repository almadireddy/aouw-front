import Ember from 'ember';
import { hash } from 'rsvp';


export default Ember.Route.extend({
  model() {
    return hash({
      photos: this.store.findAll('photo'),
      collections: this.store.findAll('collection'),
      literatures: this.store.findAll('literature')
    })
  }
});
