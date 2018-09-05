import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      photos: this.store.findAll('photo'),
      collections: this.store.findAll('collection')
    })
     
  }
});
