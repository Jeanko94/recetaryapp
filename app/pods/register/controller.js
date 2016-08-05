import Ember from 'ember';

export default Ember.Controller.extend({
  firebase: Ember.inject.service(),

  model(){
    isEmailValid: Ember.computed.match('email', /^.+@.+\..+$/),
    isPasswordValid: Ember.computed.match('password', /^[a-zA-Z0-9]{5,}$/),
    isValid: Ember.computed.and('isEmailValid','isPasswordValid'),
    isDisabled : Ember.computed.not('isValid'),
  },
  actions: {
    register() {
      let controller = this;
      this.get('firebase').createUser({
        email: this.get('email') || '',
        password: this.get('password') || '',
      }, (error, data) => {
        if (error) {
          console.log(error);
        } else {
          controller.set('email', null);
          controller.set('password', null);
        }
      });
    }
  }
});
