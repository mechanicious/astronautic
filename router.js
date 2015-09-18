_routes = {
  "public_index": "#index",
  "atom": "#atom",
  "atom_id": "#atom/:id",
};

html.router('#index', function () {
  new PageGuard().allowNotAuth(function () {
    new TemplateCache().getTemplate(['themes/spacious/index.html',
        'themes/spacious/partials/login.html', 'themes/spacious/partials/navigation.html'],
      function (index, login, navigation) {
        var rendered = Mustache.render(index, {}, {
          nav: navigation,
          body: "<h2>Welcome!</h2>"
        });
        return $('body').html(rendered);
      })
  });
})

html.router('#atom/:id', function (id) {
  new AtomController(function () {
    new AtomCardEngineer().getStack(function (data) {
      new TemplateCache().getTemplate(['js/Atom/view/Atom/super.html', 'js/User/view/User/user.html'],
        function (superTemplate, userTemplate) {
          var rendered = Mustache.render(superTemplate, {
            card: data[id].data,
            id: id
          }, {user: userTemplate});
          return $('body').html(rendered);
        })
    })
  })
});


html.router('#user/login', function () {
  new PageGuard().allowNotAuth(function () {
    new UserController(function () {
      new TemplateCache().getTemplate(['themes/spacious/index.html',
          'themes/spacious/partials/navigation.html', 'themes/spacious/partials/login.html'],
        function (index, navigation, login) {
          var rendered = Mustache.render(index, {}, {
            nav: navigation,
            body: login
          });
          $('body').html(rendered);
          return new BGPainter().make(55);
        })
    })
  });
})

html.router('#user/register', function () {
  new PageGuard().allowNotAuth(function () {
    new UserController(function () {
      new TemplateCache().getTemplate(['themes/spacious/index.html',
          'themes/spacious/partials/navigation.html', 'themes/spacious/partials/register.html'],
        function (index, navigation, login) {
          var rendered = Mustache.render(index, {}, {
            nav: navigation,
            body: login
          });
          $('body').html(rendered);
          return new BGPainter().make(55);
        })
    })
  });
})

html.router('#user/profile/:username', function () {
  new PageGuard().allowAuth(function () {
    new UserController().profile(function (data) {
      new TemplateCache().getTemplate(['themes/spacious/partials/user/index.html',
          'themes/spacious/partials/user/navigation.html', 'themes/spacious/partials/user/profile.html'],
        function (index, navigation, profile) {
          var rendered = Mustache.render(index, {user: data.user}, {
            nav: navigation,
            profile: profile
          });
          return $('body').html(rendered);
        })
    })
  });
})

html.router('#user/logout', function () {
  new UserController().logout();
})

html.router('#404', function () {
  new TemplateCache().getTemplate('view/404.html', function (template) {
    var rendered = Mustache.render(template);
    return jQuery(C.AtomController.showAtom).html(rendered);
  })
})

html.router('#error', function (error) {
  new TemplateCache().getTemplate('view/error.html', function (template) {
    var rendered = Mustache.render(template, {error: 'hi'});
    return jQuery(C.AtomController.showAtom).html(rendered);
  })
})

// We're finished with loading the page
Signal.pageLoad(C.Boostrap.pageLoad).off();
console.log('Router done');
console.log('Boot time: ' + (new Date().getTime() - bootStart) + 'ms');

if (!window.location.hash) html.navigate(absolute_root_path() + '#index');
else html.navigate(_routes.public_index);