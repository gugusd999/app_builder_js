// jika halaman tidak ada
// membuat login system

root.err = function () {
  location.href = `#/wp-login`;
}

root.verify = function (a) {

  // make verify
  if (localStorage.getItem('login') === null) {
    location.href = "#/wp-login"
  } else {
    return false;
    console.log('more')
  }

}

const dataCssAdmin = [
  'font/css/all',
  'admin/css/sb-admin-2.min',
  'plugin/datepicker/dist/css/bootstrap-datepicker3.min',
  'admin/vendor/datatables/dataTables.bootstrap4.min',
];


const dataJsAdmin = [
  'admin/vendor/bootstrap/js/bootstrap.bundle.min',
  'admin/vendor/jquery-easing/jquery.easing.min',
  'admin/js/sb-admin-2.min',
  'admin/vendor/chart.js/Chart.min',
  'admin/vendor/datatables/jquery.dataTables.min',
  'admin/vendor/datatables/dataTables.bootstrap4.min',
  'plugin/datepicker/dist/js/bootstrap-datepicker.min',
  'script/wp-logout',
  'plugin/jquery/numberonly'
]



root.get('/wp-login', function () {
  var arg = arguments;
  loadCss(dataCssAdmin, function () {
    loadPage([
      'page/wp-login/a',
    ], function () {
      loadJs(dataJsAdmin, function () {
        rootCall('page/wp-login/a', arg);
      })
    })
  })
})

root.get('/wp-register', function () {
  var arg = arguments;
  loadCss(dataCssAdmin, function () {
    loadPage([
      'page/wp-register/a',
    ], function () {
      loadJs(dataJsAdmin, function () {
        rootCall('page/wp-register/a', arg);
      })
    })
  })
})

root.get('/project', function () {
  var arg = arguments;
  loadCss(dataCssAdmin, function () {
    loadPage([
      'page/nav/nav2',
      'page/project/a',
      'page/nav/foo2',
    ], function () {
      loadJs(dataJsAdmin, function () {
        rootCall('page/project/a', arg);
      })
    })
  })
})

root.get('/project-menu', function () {
  var arg = arguments;
  loadCss(dataCssAdmin, function () {
    loadPage([
      'page/nav/nav2',
      'page/project-menu/a',
      'page/nav/foo2',
    ], function () {
      loadJs(dataJsAdmin, function () {
        rootCall('page/project-menu/a', arg);
      })
    })
  })
})

root.get('/migration', function () {
  var arg = arguments;
  loadCss(dataCssAdmin, function () {
    loadPage([
      'page/nav/nav2',
      'page/migration/a',
      'page/nav/foo2',
    ], function () {
      loadJs(dataJsAdmin, function () {
        rootCall('page/migration/a', arg);
      })
    })
  })
})


// halaman pertama kali di load
root.start('/project');

// realtime set update

// set for logout 

$('body').on('click', '[logout-wp]', function (event) {
  event.preventDefault();
  localStorage.removeItem('login');
  location.href = '#/wp-login';
})