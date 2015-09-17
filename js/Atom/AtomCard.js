/*
  Atom Card is respnsible for providing interface to interact with
  the Atom Card data.
 */
// dependency jQuery.map 

 function AtomCard(atomConfig)
 {
  // Init
  this.requiredFields = ['abbr', 'elconfig', 'fase', 'name', 'proton', 'type', 'weight'];
  this._controleConfig(atomConfig);
  this._assignData(atomConfig);
  this._createSettersGetters();
 }

 AtomCard.prototype._controleConfig = function(config)
 {
  var self = this;
  var requiredFields = self.requiredFields;
  requiredFields.forEach(function(key) {
    if( ! config[key]) throw new Error('missing ' + key);
  });
 }

 AtomCard.prototype._assignData = function(config)
 {
  var self = this;
  var requiredFields = self.requiredFields;
  self.data = {};
  requiredFields.forEach(function(key) {
    self.data[key] = config[key];
  })
 }

 AtomCard.prototype._createSettersGetters = function()
 {
  var self = this;
  var requiredFields = self.requiredFields;
  requiredFields.forEach(function(key) {
    self[key] = function(value) {
      if(value) return self.data[key] = value;
      return self.data[key];
    }
  })
 }

 AtomCard.prototype.toString = function (delimiter) {
  var self = this;
  var attributes = [];
  var delimiter = typeof delimiter === "undefined" ? ' ' : delimiter;
  var requiredFields = self.requiredFields;
  requiredFields.forEach(function(key) {
    return attributes.push(self.data[key]);    
  })
  return attributes.join(delimiter);
 }