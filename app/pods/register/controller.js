import Ember from 'ember';

export default Ember.Controller.extend({
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('index');
    }
  },
  firebaseApp: Ember.inject.service(),
  isEmailValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isPasswordValid: Ember.computed.match('password',/^[a-zA-z0-9]+$/),
  isPasswordEqual: Ember.computed('password', 'passwordConfirm', function(){
    if(this.get('password') === this.get('passwordConfirm')){
      return true;
    }else{
      return false;
    }
  }),
  isPassword: Ember.computed.and('isPasswordValid', 'isPasswordEqual'),
  isValid: Ember.computed.and('isEmailValid', 'isPassword'),
  isDisabled: Ember.computed.not('isValid'),
  actions: {
    register() {
      var _that = this;
      const auth = this.get('firebaseApp').auth();
      const email = this.get('email');
      const pass = this.get('password');
      const name = this.get('name');
      const lastName = this.get('lastName');
      console.log(email,pass);
      auth.createUserWithEmailAndPassword(email, pass).then((userResponse) => {
      const user = this.store.createRecord('user', {
        id: userResponse.uid,
        email: userResponse.email,
        name: name,
        lastName: lastName
      });
      this.set('email', '');
      this.set('password', '');
      return user.save().then((response)=>{
        _that.set('responseMessage',`Register successful with id: ${response.get('id')}`);
        _that.set('emailAddress', '');
        _that.set('password','');
        _that.transitionToRoute('login');
      });
    });
    }
  }
});
