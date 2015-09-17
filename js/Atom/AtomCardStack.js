/*
  Responsible for providing an interface to interact with the Atom Card Stack (ACS).
 */

 function AtomCardStack(cardCollection) {
  this.cardCollection = cardCollection;
 }

 AtomCardStack.prototype.get = function(id) {
  var self = this;
  if(typeof id === "number") return self.cardCollection[id];
  return; 
 }