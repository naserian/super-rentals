import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rental', {path: '/rental/:rental_id'});
  this.route('review');
  this.route('new-review');
});

export default Router;
