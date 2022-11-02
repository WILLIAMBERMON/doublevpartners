
/*
Funcion que consulta en la api de github por nombre de usuario.
*/
function searchename(name = ''){
   
    var noerror = true;
    if(name.length==0){
        name = $('#nombre').val();
    }
    if(name.length<4){
        toastr.error('El texto de búsqueda de usuarios debe tener mínimo de 4 caracteres.');
        noerror = false;
    }
    if((name.toLowerCase() == 'doublevpartners')){
        toastr.error('El texto de búsqueda de usuarios  no puede ser doublevpartners.');
        noerror = false;
    }
    if(noerror){
        $('#result').html('');
        $('#usuarios').val('');
        $('#colores').val('');
        $('#seguidor').val('');
        var barColors = ["red", "green","blue","orange","brown","Cyan","Navy","Silver","Lime","Fuchsia"];
        var urlf ="https://api.github.com/search/users?q="+name;
        var content = '';
        var tabla = '<canvas id="myChart" style="width:100%;max-width:600px;background:white"></canvas><br><div class="table-responsive"><table class="datatablew table table-striped table-bordered dt-responsive" style="border-collapse: collapse; border-spacing: 0; width: 100%;"><thead><tr style="background-color: #b71731;color: white"><th style="width: 5%;text-align:center">N°</th><th style="width: 20%;text-align:center">Foto</th><th style="width: 20%;text-align:center">Login</th><th style="width: 10%;text-align:center">Id</th><th style="width: 45%;text-align:center">Url</th></tr></thead><tbody>';
        var listado = $.ajax({
            url: urlf
        }).then(function(data) {
            if(data.items.length>0){
                $.each(data.items, function(index, value) {
                    if(index<10){
                        content += '<tr><td>'+(index+1)+'</td><td><img class="rounded" alt="'+value.url+'" style="width:150px" src="'+value.avatar_url+'"></td><td>'+value.login+'</td><td>'+value.id+'</td><td><a href="https://api.github.com/users/'+value.login+'" title="Acceder al json del usuario '+value.login+'" target="_blank">'+value.url+'</a></td></tr>';
                        var usu = $('#usuarios').val();
                        var col = $('#colores').val();
                        usu = (usu.length > 0)?(usu+","+value.login):(value.login);
                        $('#usuarios').val(usu);
                        col = (col.length > 0)?(col+","+barColors[index]):(barColors[index]); 
                        $('#colores').val(col);
                    }
                });
                if(content.length>0){
                    tabla += content+'</tbody></table>';
                    $('#result').html(tabla);
                    $(".datatablew").DataTable({
                        language: {
                          url: "/assets/plugins/datatables/lenguaje/spanish.json",
                        },
                        order: [],
                      });
                }
            }else{
                toastr.error('El texto de búsqueda de usuarios escrito no retorna resultados.');
            }
        });
        
        listado.then(function(){
        var colores = $('#colores').val();
        colores = colores.split(',');
        var usuarios = $('#usuarios').val();
        usuarios = usuarios.split(',');
        var seguitors=[];
        
        $.each(usuarios, function(index, value) {
            var urls = 'https://api.github.com/users/'+value;
            $.ajax({
                url: urls
            }).then(function(datas) {
                seguitors.push(datas.followers);
                if(index+1 == usuarios.length){
                    new Chart("myChart", {
                        type: "bar",
                        data: {
                            labels: usuarios,
                            datasets: [{
                            backgroundColor: colores,
                            data: seguitors
                            }]
                        },
                        options: {
                            legend: {display: false},
                            title: {
                            display: true,
                            text: "Número de seguidores"
                            }
                        }
                        });  
                }
            });
        });
        })
    }
}

/*
Funcion que consulta en la api de github por url de github.
*/
function searchurl(name = ''){
    var noerror = true;
    if(name.length==0){
        name = $('#nombre').val();
    }
    if(name.length<4){
        toastr.error('El texto de búsqueda por url debe tener mínimo de 4 caracteres.');
        noerror = false;
    }else{
        name = name.toLowerCase();
        var partesurl = name.split('/');
        if((partesurl[0] != 'https:') || (partesurl[2] != 'api.github.com') || (partesurl[3] != 'users') || (partesurl[4].length < 0)){
            toastr.error('El texto de búsqueda por url no cumple con los requisitos de una url valida de github.');
        }
    }
    if(noerror){
        $('#result').html('');
        var urlf = name;
        var content = '';
        var tabla = '<div class="table-responsive"><table class="datatablew table table-striped table-bordered dt-responsive" style="border-collapse: collapse; border-spacing: 0; width: 100%;"><thead><tr style="background-color: #b71731;color: white"><th style="width: 20%;text-align:center">Foto</th><th style="width: 30%;text-align:center">Login</th><th style="width: 10%;text-align:center">Id</th><th style="width: 45%;text-align:center">Url</th></tr></thead><tbody>';
        $.ajax({
            url: urlf
        }).then(function(data) {
            if(data.login.length > 0){
                    content += '<tr><td><img class="rounded" alt="'+data.url+'" style="width:150px" src="'+data.avatar_url+'"></td><td>'+data.login+'</td><td>'+data.id+'</td><td><a href="https://api.github.com/users/'+data.login+'" title="Acceder al json del usuario '+data.login+'" target="_blank">'+data.url+'</a></td></tr>';
                    tabla += content+'</tbody></table>';
                    $('#result').html(tabla);
            }else{
                toastr.error('El texto de búsqueda por url escrito no retorna resultados.');
            }
        });
    }
}