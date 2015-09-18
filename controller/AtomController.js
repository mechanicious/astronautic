/*
  Responsible for providing an API to effecively display the atom page.
 */
// dependency html as html

function AtomController(callback) {
  console.log('AtomController boot');
  var lastLogin = new User().get('lastLogin');
  if( ! new User().isLogged(lastLogin)) return html.navigate('#user/login');
  callback();
};

AtomController.next = function(id) {
  if(parseInt(id) < 113) return html.navigate('#atom/' + (id + 1));
  return html.navigate('#results');
}