<?php
use chriskacerguis\RestServer\RestController;
require APPPATH.'/libraries/RestController.php';
require APPPATH.'/libraries/Format.php';


class Ticket extends RestController
{
    public function crear_get(){
        $usuario = $this->get('usuario');
        $status = ($this->get('status'))?($this->get('status')):'abierto';
        $this->load->model('ticket_model');
        if($usuario){
            $crear = $this->ticket_model->crear($usuario,$status);
            $respuesta = '';
            if(isset($crear) && $crear){
                $respuesta = 'El ticket fue creado con éxito.';
            }else{
                $respuesta = 'El ticket no pudo ser creado, algo salio mal.';
            }
            $this->response($respuesta);
        }else{
            $this->response('Es necesario escribir al menos el nombre del usuario.');
        }
    }
    public function crear_post(){
        $usuario = $this->post('usuario');
        $status = ($this->post('status'))?($this->post('status')):'abierto';
        $this->load->model('ticket_model');
        if($usuario){
            $crear = $this->ticket_model->crear($usuario,$status);
            $respuesta = '';
            if(isset($crear) && $crear){
                $respuesta = 'El ticket fue creado con éxito.';
            }else{
                $respuesta = 'El ticket no pudo ser creado, algo salio mal.';
            }
            $this->response($respuesta);
        }else{
            $this->response('Es necesario escribir al menos el nombre del usuario.');
        }
    }

    public function listar_get(){
        $id = ($this->get('id'))?($this->get('id')):'';
        $pagina = ($this->get('pagina'))?($this->get('pagina')):'';
        $limite = ($this->get('limite'))?($this->get('limite')):'10';

        $this->load->model('ticket_model');
        $listar = $this->ticket_model->listar($id,$pagina,$limite);
        if(isset($listar) && $listar){
            $this->response($listar);
        }else{
            $this->response('La consulta bo arroja resultados.');
        }
    }

    public function listar_post(){
        $id = ($this->post('id'))?($this->post('id')):'';
        $pagina = ($this->post('pagina'))?($this->post('pagina')):'';
        $limite = ($this->post('limite'))?($this->post('limite')):'10';

        $this->load->model('ticket_model');
        $listar = $this->ticket_model->listar($id,$pagina,$limite);
        if(isset($listar) && $listar){
            $this->response($listar);
        }else{
            $this->response('La consulta no arroja resultados.');
        }
    }

    public function actualizar_put(){
        $id = $this->put('id');
        $usuario = ($this->put('usuario'))?($this->put('usuario')):'';
        $status = ($this->put('status'))?($this->put('status')):'';
        if($id && ($usuario || $status)){
            $this->load->model('ticket_model');
            $actualizar = $this->ticket_model->actualizar($id,$usuario,$status);
            $respuesta = '';
            if(isset($actualizar) && $actualizar){
                $respuesta = 'El ticket fue actualizado con éxito.';
            }else{
                $respuesta = 'El ticket no pudo ser actualizado, algo salio mal.';
            }
            $this->response($respuesta);
        }else{
            $this->response('Para realizar la actualización es necesario el id, además del usuario o el status.');
        }
    }
    public function eliminar_delete(){
        $id = $this->delete('id');
        
        if($id){
            $this->load->model('ticket_model');
            $eliminar = $this->ticket_model->eliminar($id);
            $respuesta = '';
            if(isset($eliminar) && $eliminar){
                $respuesta = 'El ticket fue eliminado con éxito.';
            }else{
                $respuesta = 'El ticket no pudo ser eliminado, algo salio mal.';
            }
            $this->response($respuesta);
        }else{
            $this->response('Para eliminar es necesario el id.');
        }
    }
}