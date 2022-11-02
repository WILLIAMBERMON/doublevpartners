<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class CMS_Controller extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        if (ENVIRONMENT == 'development') {
            $this->output->enable_profiler(TRUE);
        }
        //Usado por la libreria Database2 para el seguimiento de las consultas ejecutadas
        $this->session->userdata['queries'] = array();
        $this->session->userdata['query_time'] = array();
        $this->session->userdata['query_nrows'] = array();

        //Procesos que se deben ejecutar cuando el usuario ha iniciado sesión
        $usuario = $this->session->persona;
        $this->unread_notifications = NULL;

        if ($usuario) {
           }
    }

    
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */