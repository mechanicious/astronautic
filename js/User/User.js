/*
  Responsible for providing a way to interact with User.
 */
// dependency LocalStorageCache as LocalStorageCache
// dependency Archievement as Archivement

User.prototype = LocalStorageCache.prototype;

function User(username, password) {
  this._id = 'User';
  if(password) this.set(username, {
    'username': username, 
    'password': password,
    'archievements': {
      'count': 0,
      'list': []
    },
    'level': 1,
    'points': 0
  });
}

User.prototype.login = function(username, password) {
  if(! username || ! password) return false;
  if( ! this.get(username)) return false;
  if(this.get(username)['password'] !== password) return false;
  this.set('lastLogin', username);
  this.setTTL(username + '.logged', true, 1000 * 60 * 60 * 12);
  return true;
}

User.prototype.logout = function(username) {
  return this.deleteTTL(username + '.logged');
}

User.prototype.isLogged = function(username) {
  return this.getTTL(username + '.logged');
}
