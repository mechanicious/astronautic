/*
  Responsible for providing an API to help decicde whether to allow user to see the page. 
 */
// dependecy User as User

function PageGuard () {}

PageGuard.prototype.allowAuth = function (callback) {
  var lastLogin = new User().get('lastLogin');
  if(! new User().isLogged(lastLogin)) return html.navigate('/#user/login');
  return callback();
}

PageGuard.prototype.allowNotAuth = function (callback) {
  var lastLogin = new User().get('lastLogin');
  if(new User().isLogged(lastLogin)) return html.navigate('/#user/profile/' + lastLogin);
  return callback();
}