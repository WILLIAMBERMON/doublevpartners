<div style="text-align:center;">
    <table style="width: 100%"><tr><td style="width: 10%"></td>
            <td style="width: 80%">
                <div style="background-color: #b71731;border: 2px solid #b71731;border-radius: 10px 10px 0px 0px;box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);" >
                    <h3 style="color: white"><?php echo $content_header ?> <button id="adminpage" type="button" style="background-color: #b71731;border: 2px solid #b71731" class="btn btn-default btn-sm pull-right" onclick="minimizar('<?php echo (preg_replace('([^A-Za-z0-9])', '', strtolower($content_header))) ?>',this)"><i style="color: white" class="fa fa-minus"></i></button></h3>
                </div>
            </td>
            <td style="width: 10%"></td>
        </tr>
    </table>
</div>
<div class="card" id="<?php echo (preg_replace('([^A-Za-z0-9])', '', strtolower($content_header))) ?>" >
    <div class="card-body">
        <div class="form-group">
            <label for="exampleInputEmail1"><b>Nombre de usuario de Github (*)</b></label>
            <input type="text" minlength="4" required name="nombre" id="nombre" onblur="searchename(this.value)" class="form-control" aria-describedby="nombre" placeholder="Nombre de usuario de Github">
            <br><button type="button" onclick="searchename()" class="btn btn-primary float-end"><i class="fa fa-search"></i> Buscar</button><br>
        </div>
        <input type="hidden" id="usuarios"><input type="hidden" id="seguidor"><input type="hidden" id="colores">
        <div id="result" style="margin-top:20px">
        </div>    
    </div>
</div>