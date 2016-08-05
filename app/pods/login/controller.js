import Ember from 'ember';

export default Ember.Controller.extend({
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('index');
    }
  },
  isEmailValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isPasswordValid: Ember.computed.match('password',/^[a-zA-z0-9]+$/),
  isValid: Ember.computed.and('isEmailValid', 'isPasswordValid'),
  isDisabled: Ember.computed.not('isValid'),
  actions: {
    login(provider){
      let controller = this;
      this.get('session').open('firebase', {
        provider: provider,
        email: this.get('email') || '',
        password: this.get('password') || '',
      }).then(() => {
        controller.set('responseMessage', 'Login Successful');
        controller.set('email', null);
        controller.set('password', null);
        controller.transitionToRoute('index');
      }, (error) => {
        console.log(error);
      });
    }
  }
});
