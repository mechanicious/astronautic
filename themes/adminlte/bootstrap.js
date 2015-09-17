html.styles({
        fontAwesome: 'themes/adminlte/css/font-awesome/font-awesome.min.css',
        ionIcons: 'themes/adminlte/css/ionicons/ionicons.min.css',
        morris: 'themes/adminlte/css/morris/morris.css',
        jVectorMap: 'themes/adminlte/css/jvectormap/jquery-jvectormap-1.2.2.css',
        datePicker: 'themes/adminlte/css/datepicker/datepicker3.css',
        dateRangePicker: 'themes/adminlte/css/daterangepicker/daterangepicker-bs3.css',
        boostrap: 'themes/adminlte/css/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',
        adminLte: 'themes/adminlte/css/AdminLTE.css'
})

html.styles.render('fontAwesome').then('ionIcons').then('morris').then('jVectorMap')
.then('datePicker').then('dateRangePicker').then('boostrap').then('adminLte');

html.scripts({
        boostrap: 'themes/adminlte/js/plugins/bootstrap.min.js',
        jQueryUi: 'themes/adminlte/js/plugins/jquery-ui-1.11.1/jquery-ui.min.js',
        raphael: '//cdnthemes/adminlte/js.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js',
        morris: 'themes/adminlte/js/plugins/morris/morris.min.js',
        jQuerySparkline: 'themes/adminlte/js/plugins/sparkline/jquery.sparkline.min.js',
        jQuerySlimScroll: 'themes/adminlte/js/plugins/slimScroll/jquery.slimscroll.min.js',
        jQueryJV: 'themes/adminlte/js/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
        jQueryJVWM: 'themes/adminlte/js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
        jQueryKnob: 'themes/adminlte/js/plugins/jqueryKnob/jquery.knob.js',
        dateRangePicker: 'themes/adminlte/js/plugins/daterangepicker/daterangepicker.js',
        jqTree: 'themes/adminlte/js/plugins/jqTree/tree.jquery.js',
        bstDatePicker: 'themes/adminlte/js/plugins/datepicker/bootstrap-datepicker.js',
        wysihtml5: 'themes/adminlte/js/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
        icheck: 'themes/adminlte/js/plugins/iCheck/icheck.min.js',
        app: 'themes/adminlte/js/AdminLTE/app.js',
        dashboard: 'themes/adminlte/js/AdminLTE/dashboard.js',
        demo: 'themes/adminlte/js/AdminLTE/demo.js'
});

html.scripts.render('boostrap').then('jQueryUi').then('raphael').then('morris').then('jQuerySparkline')
.then('jQuerySlimScroll').then('jQueryJV').then('jQueryJVWM').then('jQueryKnob').then('dateRangePicker')
.then('jqTree').then('bstDatePicker').then('wysihtml5').then('icheck').then('app').then('dashboard').then('demo');