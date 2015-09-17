/*
  Responsible for providing an API to effecively display the login page.
 */
// dependency html as html

function LoginController(callback) {
  var lastLogin = new User().get('lastLogin');
  if(new User().isLogged(lastLogin)) return html.navigate('/#atom/0');
  callback(function() {
    new BGPainter(1).make(80);
  });
};

LoginController.login = function() {
  var username = jQuery('#username').val();
  var password = jQuery('#password').val();
  if( ! new User().login(username, password)) return window.location.reload();
  return html.navigate('/#atom/0');
}

LoginController.logout = function() {
  var lastLogin = new User().get('lastLogin');
  new User().logout(lastLogin);
  return html.navigate('/#user/login');
}