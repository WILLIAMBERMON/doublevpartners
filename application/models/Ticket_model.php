<?php

class Ticket_model extends CI_Model
{

    function __construct()
    {
        parent::__construct();
    }

    public function crear($usuario,$status){
        $sql = "insert into ticket(usuario,status) values ('".$usuario."','".$status."')";
        $query = $this->db->query($sql);
        return $query;
    }
    public function listar($id,$pagina,$limite){
        
        $query = $this->db->query("select * from ticket ".(($id)?(" where id = '".$id."' "):"").(($pagina)?(" LIMIT ".(($pagina-1)*$limite).",".$limite):""));
        $results = array();
        foreach ($query->result() as $result) {
            $results[] = $result;
        }
        return $results;
    }

    public function actualizar($id,$usuario,$status){
        $sql = "update ticket set fecha_actualizacion = now() ".(($usuario)?(", usuario = '".$usuario."' "):'').(($status)?(", status = '".$status."' "):'')." where id = '".$id."'";
        $query = $this->db->query($sql);
        return $query;
    }
    
    public function eliminar($id){
        $sql = "delete from ticket where id = '".$id."'";
        $query = $this->db->query($sql);
        return $query;
    }
}
