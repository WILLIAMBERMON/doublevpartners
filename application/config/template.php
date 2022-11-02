<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

$config['template']['default'] = 'default_template';

$config['template']['js'] = array(
    // Basic js

    'themeAdmin/libs/jquery/jquery.min',
    'themeAdmin/libs/bootstrap/js/bootstrap.bundle.min',
    'themeAdmin/libs/metismenu/metisMenu.min',
    'themeAdmin/libs/simplebar/simplebar.min',
    'themeAdmin/libs/node-waves/waves.min',
    'themeAdmin/libs/jquery-sparkline/jquery.sparkline.min',
    // Morris Chart
    'themeAdmin/libs/raphael/raphael.min',
    'themeAdmin/libs/morris.js/morris.min',
    'themeAdmin/js/pages/dashboard.init',
    // Form Validation
    'themeAdmin/libs/parsleyjs/parsley.min',
    'themeAdmin/libs/parsleyjs/i18n/es',
    'themeAdmin/js/pages/form-validation.init',
    'themeAdmin/libs/moment/moment',
    'themeAdmin/js/pages/form-validation-extras', //validaciones personalizadas
    'themeAdmin/js/pages/mensaje',
    'themeAdmin/js/app',
    /* sweet alert */
    "themeAdmin/libs/sweetAlertD/sweetalert2.all.min",
    "themeAdmin/libs/datatables.net/js/jquery.dataTables.min",
    "themeAdmin/libs/datatables.net-bs4/js/dataTables.bootstrap4.min",
    "themeAdmin/libs/datatables.net-buttons/js/dataTables.buttons.min",
    "themeAdmin/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min",
    "themeAdmin/libs/datatables.net-buttons/js/buttons.html5.min",
    "themeAdmin/libs/datatables.net-buttons/js/buttons.print.min",
    "themeAdmin/libs/datatables.net-buttons/js/buttons.colVis.min",
    "themeAdmin/libs/datatables.net-responsive/js/dataTables.responsive.min",
    "themeAdmin/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min",
    "themeAdmin/js/pages/datatables.init",
    "plugins/toastr/toastr",
    'themeAdmin/libs/jszip/jszip.min',
    'themeAdmin/libs/pdfmake/build/pdfmake.min',
    'themeAdmin/libs/pdfmake/build/vfs_fonts',
    'themeAdmin/js/pages/datatables.init',
    'themeAdmin/libs/tinymce/tinymce.min',
    'themeAdmin/libs/tinymce/langs/es_419',
    'themeAdmin/js/pages/form-editor.init',
    /* bs-stepper */
    "themeAdmin/libs/bs-stepper/bs-stepper.min",
    "themeAdmin/libs/bs-stepper/index",
    /* inicializacion de DataTables */
    "plugins/datatables/js/index",

);

$config['template']['css'] = array(
    'themeAdmin/css/icons.min',
    "themeAdmin/libs/sweetAlertD/sweetalert2.min",
    "plugins/toastr/toastr",
    //datatable
    'themeAdmin/libs/datatables.net-bs4/css/dataTables.bootstrap4.min',
    'themeAdmin/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min',
    'themeAdmin/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min',
    "themeAdmin/libs/bs-stepper/bs-stepper.min",
);

/* End of file template.php */
/* Location: ./application/config/template.php */