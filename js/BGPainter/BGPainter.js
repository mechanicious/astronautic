/*
  Responsible for creating a background for the page.
 */

function BGPainter() {
  var mutation = 1;
  if(typeof mutation !== "number") throw new Error('BGPainter: mutation has to be a number');
  this.mutation = mutation;
}

BGPainter.prototype._getElements = function(callback) {
  $.get('/js/BGPainter/elements.json').done(function(data) {
    return callback(data);
  })
}

BGPainter.prototype.make = function(amountOfElements) {
   var self = this;
   return self._getElements(function(data) {
    var elements = data;
    elements = elements.getRandom(amountOfElements);
    $('.page-background li').remove();
    elements.forEach(function(e, i) {
      $('.page-background').append('<li><i class="' + e.replace('.', '') + '"></i></li>');
    })
    return self.autoResize();
  });
}

BGPainter.prototype.autoResize = function () {
  $(window).resize(function() {
    if(window.innerWidth < 600) return;
    $('style[data-type="junk"]').remove();
      $('body').append('<style data-type="junk">.page-background i:before { font-size: ' + (window.innerWidth / 11) + 'px; }</style>');
    })
  $(window).trigger('resize');
}

