/*
  Responsible of providing a way to interact with the Template Cache (TC).
 */
// dependency LocalStorageCache as LocalStorageCache
// dependecy TemplateCacheConfig as TemplateCacheConfig
// dependecy C.TemplateCache as C.TemplateCache
// dependecy Signal as Signal
// dependecy jQuery.get as jQuery.get

// extend
TemplateCache.prototype = LocalStorageCache.prototype;

function TemplateCache() {
  this._id = 'TemplateCache';
  var self = this;
  if(self.get('cacheId') !== TemplateCacheConfig.cacheId) {
    self.flush(), self.set('cacheId', TemplateCacheConfig.cacheId);
  }
}

TemplateCache.prototype.getTemplate = function(templateId, callback) {
  var self = this;
  var signal = Signal.reading(C.TemplateCache.reading);
  signal.on();
  if( ! callback) throw new Error(self._id + ': You must provide a callback');
  signal.off();
  
  if(typeof templateId !== "object") return self._singleRequest(templateId, callback);
  return self._bulkRequest.apply(this, arguments);
}

TemplateCache.prototype._singleRequest = function(templateId, callback) {
  var self = this;
  if(typeof self.get(templateId) === "string") return callback(self.get(templateId));
  return self._requestTemplateWithAjax(templateId, callback);
}

TemplateCache.prototype._bulkRequest = function(allTemplateIds, callback) {
  var self = this;
  var templates = [];
  allTemplateIds.forEach(function(templateId, i) {
    return self._requestTemplateWithAjax(templateId, function(template) {
      // Make sure the order is kept
      templates[allTemplateIds.getIndexOf(templateId)] = (template);
      // Call the callback when everythig is ready
      if(templates.length === allTemplateIds.length) return callback.apply(this, templates, true);
    });
  });
}

TemplateCache.prototype._requestTemplateWithAjax = function (templateId, callback, off) {
  var self = this;
  var signal = Signal.ajaxRequest(C.TemplateCache.ajaxRequest);
  signal.on();
  jQuery.get(templateId).done(function(template) {
    self.set(templateId, template); 
    signal.off(); if(! off) callback(template);
  })
}


