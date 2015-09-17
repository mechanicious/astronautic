var bootStart = new Date().getTime();
html.config.allowDuplicate = false;  

var support = ['js/Support/helpers.js']; 
var config = ['config/config.js'];
var container = ['config/Container.js']; 
var signal = ['js/Signal/Signal.js'];
var atom = ['js/Atom/AtomCard.js', 'js/Atom/AtomCardStack.js', 'js/Atom/AtomCardEngineer.js'];
var BGPainter = ['js/BGPainter/BGPainter.js'];
var localStorageCache = ['js/LocalStorageCache/config.js', 'js/LocalStorageCache/C.js', 'js/LocalStorageCache/LocalStorageCache.js'];
var templateCache = ['js/TemplateCache/config.js', 'js/TemplateCache/C.js', 'js/TemplateCache/TemplateCache.js'];
var user = ['js/User/User.js'];
var archievement = ['js/Archievement/archievements.json', 'js/Archievement/Archievement.js'];
var router = ['router.js'];
var guard = ['js/Guard/Guard.js'];
var controllers = ['controller/AtomController.js', 
'controller/LoginController.js', 
'controller/UserController.js'];

html.scripts({  
    jQuery: 'js/vendor/jquery-2.1.1.min.js',
    mustache: 'js/vendor/mustache.js',
    jstorage: 'js/vendor/jstorage.js',
    support: support,
    config: config,
    container: container,
    signal: signal,
    atom: atom,
    BGPainter: BGPainter,
    localStorageCache: localStorageCache,
    templateCache: templateCache,
    controllers: controllers,
    user: user,
    archievement: archievement,
    guard: guard,
    router: router,
    theme: 'themes/adminlte/bootstrap.js'
});

//render scripts  
html.scripts.render('jQuery').then('support').then('container').then('signal').done(function() {
  // Indicate page load
  Signal.pageLoad(C.Boostrap.pageLoad).on();
}).then('jstorage').then('mustache').then('config').then('localStorageCache').then('templateCache')
.then('user').then('archievement').then('atom').then('BGPainter').then('controllers').then('guard').then('router');

console.log('Boostrap done');