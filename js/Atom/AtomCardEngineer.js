/*
  Atom Card Engineer is responsible for creating Atom Card Stack (ACS). 
 */
// dependency config/config.json as appConfig
// dependency jQuery.Ajax as jQuery.ajax
// dependency jQuery.map as jQuery.map
// dependency jQuery.jStorage as jQuery.jStorage
// dependency js/AtomCard.js as AtomCard
// dependency js/AtomCardStack.js as AtomCard
// dependency config/Container.js as C
// dependency js/Signal.js as Signal

 function AtomCardEngineer() {
  this._localStackId = 'AtomCardEngineer.atomCardStack';
 };

 AtomCardEngineer.prototype.getStack = function(callback) {
  var signal = Signal.save(C.AtomCardEngineer.getStack);
  var self = this;
  var localAtomCardStack = self._getLocalStack();
  if(localAtomCardStack) return callback(localAtomCardStack);
  return self._getAjaxStack(callback);
 }

 AtomCardEngineer.prototype._getLocalStack = function() {
   return jQuery.jStorage.get(this._localStackId);
 }

 AtomCardEngineer.prototype._getAjaxStack = function(callback) {
  var self = this;
  var atomCardStack;
  var signal = Signal.ajaxRequest(C.AtomCardEngineer.getStack);
  signal.on();
  jQuery.ajax(appConfig.database + "/atoms.json").done(function(data) {
    atomCardStack = jQuery.map(data, function(config, i) {
      return new AtomCard(config);
    });
    signal.off();
    self._saveStack(atomCardStack);
    if(callback) return callback(atomCardStack);
  });
 }

 AtomCardEngineer.prototype._saveStack = function(stack) {
  var signal = Signal.save(C.AtomCardEngineer.saveStack);
  signal.on();
  return jQuery.jStorage.set(this._localStackId, stack), signal.off();
 }