<?php

class Sesion extends CMS_Controller
{

    function __construct()
    {
        parent::__construct();
    }
    /*
    Funcion que carga la vista para consultar usuarios por el nombre de github.
    */
    public function home()
    {
        $this->template->add_js('js/views/sesion/chart');
        $this->template->add_js('js/views/sesion/home');
        $this->template->set('content_header', 'Consultar usuario');
        $this->template->set_template('admin/admin_template');
        $this->load->helper('form');
        $this->template->render('sesion/home');
    }

    /*
    Funcion que carga la vista para consultar usuarios por la url de github.
    */
    public function url()
    {
        $this->template->add_js('js/views/sesion/home');
        $this->template->set('content_header', 'Consultar url');
        $this->template->set_template('admin/admin_template');
        $this->load->helper('form');
        $this->template->render('sesion/url');
    }

}
