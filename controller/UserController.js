/*
  Responsible for providing an API to effecively display the login page.
 */
// dependency html as html

function UserController(callback) {
  console.log('user boot')
  if(callback) callback();
};

UserController.doLogin = function(username, password) {
  var username = username || jQuery('#username').val();
  var password = password || jQuery('#password').val();
  if( ! new User().login(username, password)) return html.navigate(_routes.public_index);
  return html.navigate('#user/profile/' + username);
}

UserController.doRegister = function() {
  var username = jQuery('#username').val();
  var password = jQuery('#password').val();
  new User(username, password).login(username, password);
  this.doLogin(username, password);
  return html.navigate('#user/profile/' + username);
}

UserController.prototype.profile = function(callback) {
  var lastLogin = new User().get('lastLogin');
  var data = {
    user: new User().get(lastLogin)
  }
  return callback(data);
}

UserController.prototype.logout = function() {
  var lastLogin = new User().get('lastLogin');
  new User().logout(lastLogin);
  return html.navigate('#user/login');
}