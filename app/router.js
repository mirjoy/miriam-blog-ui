import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('blogs', function(){
    this.route('index');
    this.route('new');
    this.route('edit', {path: '/:id/edit'});
    this.route('show', {path: '/:id'});
  });
});

export default Router;
