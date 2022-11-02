$(document).ready(function() {
    0 < $(".elm1").length && tinymce.init({
        language: "es_419",
        selector: "textarea.elm1",
        height: 300,
        plugins: ["advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker", "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking", "save table contextmenu directionality emoticons template paste textcolor"],
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons",
        style_formats: [{
            title: "Bold text",
            inline: "b"
        },
            {
                title: "Red text",
                inline: "span",
                styles: {
                    color: "#ff0000"
                }
            },
            {
                title: "Red header",
                block: "h1",
                styles: {
                    color: "#ff0000"
                }
            },
            {
                title: "Example 1",
                inline: "span",
                classes: "example1"
            },
            {
                title: "Example 2",
                inline: "span",
                classes: "example2"
            },
            {
                title: "Table styles"
            },
            {
                title: "Table row 1",
                selector: "tr",
                classes: "tablerow1"
            }],templates : [
                {"title": "Lista circulo", "description": "Lista circulo", "url": "../../../templates/lista-circulo.html"},
                {"title": "Lista letras", "description": "Lista letras", "url": "../../../templates/lista-letras.html"},
                {"title": "Lista numerico", "description": "Lista numerico", "url": "../../../templates/lista-numerico.html"},
                {"title": "Nota", "description": "Nota", "url": "../../../templates/nota.html"},
                {"title": "Nota2", "description": "Nota2", "url": "../../../templates/nota-2.html"},
                {"title": "Tabla con icono", "description": "Tabla con icono", "url": "../../../templates/tabla-con-icono.html"},
                {"title": "Tabla con datos", "description": "Tabla con datos", "url": "../../../templates/tabla-datos.html"},
                {"title": "Tabla links", "description": "Tabla links", "url": "../../../templates/tabla-links.html"},
                {"title": "Tarjeta imagen", "description": "Tarjeta imagen", "url": "../../../templates/tarjeta-imagen.html"},
                {"title": "Tarjeta ordenada", "description": "Tarjeta ordenada", "url": "../../../templates/tarjeta-ordenada.html"},
                {"title": "Tarjeta small", "description": "Tarjeta small", "url": "../../../templates/tarjeta-small.html"}
              ],
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px } prueba{background: red;} p.borde-1 {border: red 3px solid;}span.borde-1 {border: red 3px dotted;}table { width: 100%; border: 1px solid #000; } th, td { width: 25%; text-align: left; vertical-align: top; border: 1px solid #000; border-collapse: collapse; padding: 0.3em; caption-side: bottom; } caption { padding: 0.3em; color: #fff; background: #000; } th { background: #eee; } .estilo-tabla-icono{max-width:80%;margin:15px auto}.estilo-tabla-icono .tabla-icono{position:relative;display:flex;align-items:center;background:#fff;border-bottom:2px solid #dad5d5}.estilo-tabla-icono .tabla-icono figure{flex:1 1 20%;margin-bottom:0;text-align:center}.estilo-tabla-icono .tabla-icono .body-content{flex:1 1 80%;padding:10px}.estilo-tabla-icono .tabla-icono .body-content h3{font-size:1.3rem;margin-bottom:0}.estilo-tabla-icono .tabla-icono .body-content p{margin-bottom:0}.estilo-tabla-links{max-width:80%;margin:15px auto}.estilo-tabla-links .tabla-links{position:relative;background:#f1f1f1;padding:15px;border-radius:10px}.estilo-tabla-links .tabla-links .item-link{display:flex;align-items:center;justify-content:flex-start}.estilo-tabla-links .tabla-links a{padding:10px}.estilo-tabla-links .tabla-links p{padding:10px;margin-bottom:0}.estilo-tabla-datos{padding:0 15px;overflow-x:auto}.estilo-tabla-datos table{width:100%;margin-bottom:1rem;color:#212529;vertical-align:top;border-color:#dee2e6;background-color:#fff}.estilo-tabla-datos table>:not(:last-child)>:last-child>*{border-bottom:1px solid #482d2d;background-color:#df1949;color:#fff}.estilo-tabla-datos table>*>*>*{padding:.6rem .6rem;background-color:rgba(0,0,0,0);border-bottom-width:1px;text-align:center}.estilo-tabla-datos table>tbody>tr:nth-of-type(odd){background-color:rgba(241,241,241,.5803921569)}.estilo-tabla-datos table>tbody>tr>*:not(:first-child){border-left-width:1px}.estilo-tarjeta-ordenada{width:70%;margin:0 auto}.estilo-tarjeta-ordenada .tarjeta-container{padding:15px;background-color:#fee;border-radius:15px}.estilo-tarjeta-ordenada .tarjeta-container p{padding:0 15px;font-weight:bold}.estilo-tarjeta-ordenada .tarjeta-container .lista-ordenada{margin-top:15px}.estilo-tarjeta-ordenada .tarjeta-container .lista-ordenada li{margin-bottom:.7rem}.estilo-tarjeta-ordenada .tarjeta-container .lista-ordenada li::marker{font-weight:bold;letter-spacing:3px}.estilo-tarjeta-imagen{padding-left:15px;padding-right:15px}.estilo-tarjeta-imagen .tarjeta-container{align-items:center;background-color:#fee;border-radius:15px;display:flex;flex-wrap:wrap;padding:20px}.estilo-tarjeta-imagen .tarjeta-container figure{padding:10px;margin-bottom:0;text-align:center;flex:1 1 20%}.estilo-tarjeta-imagen .tarjeta-container .body-tarjeta{padding:10px;flex:1 1 50%}.estilo-tarjeta-imagen .tarjeta-container .body-tarjeta h3{margin-bottom:0;font-size:1.5rem;color:#6d5757}.estilo-tarjeta-imagen .tarjeta-container .body-tarjeta hr{width:100%;background-color:#df1949}.estilo-tarjeta-imagen .tarjeta-container .body-tarjeta p{margin-bottom:0}.estilo-tarjeta-small{display:flex;justify-content:center;flex-wrap:wrap;gap:10px}.estilo-tarjeta-small .tarjeta-container{position:relative;display:flex;flex-direction:column;align-items:center;background-color:#fff;border-radius:15px;overflow:hidden;box-shadow:2px 2px 30px rgba(0,0,0,.43),-1px -1px 20px rgba(255,255,255,.43);width:33.33%}.estilo-tarjeta-small .tarjeta-container .header-tarjeta{position:relative;height:70px;width:100%;background-color:#dad5d5}.estilo-tarjeta-small .tarjeta-container .header-tarjeta img{position:absolute;border-radius:50%;top:70px;transform:translate(-50%, -50%);left:50%}.estilo-tarjeta-small .tarjeta-container .body-tarjeta{margin-top:30px;text-align:center;padding:25px 15px}.estilo-tarjeta-small .tarjeta-container .body-tarjeta h3{font-size:1.5rem;font-weight:bold}.estilo-tarjeta-small .tarjeta-container .body-tarjeta a{width:60%;background:linear-gradient(0deg, #b71731 0%, #df1949 100%);color:#fff;border-radius:20px;border-style:none;box-shadow:rgba(0,0,0,.2) 0 3px 5px -1px,rgba(0,0,0,.14) 0 6px 10px 0,rgba(0,0,0,.2) 0 1px 18px 0;box-sizing:border-box;font-size:.9rem;font-weight:500;line-height:normal;padding:11px 24px;transition-property:background,box-shadow;transition-duration:500ms;transition-timing-function:ease}.estilo-nota{display:flex;justify-content:center;background-color:#df1949;padding:15px;gap:30px;border-radius:20px}.estilo-nota img{border-radius:50%}.estilo-nota .body-nota{display:flex;align-items:center}.estilo-nota .body-nota p{color:#fff;margin-bottom:0}.estilo-nota-2 .body-nota{padding:35px;background-color:#fee;color:#000}.estilo-nota-2 .body-nota p{margin-bottom:0}.estilo-listado-letras ul li{list-style:lower-latin}.estilo-listado-letras ul li::marker{color:#b71731;font-weight:bold;font-size:1.1rem}.estilo-listado-numerico ol li{list-style:auto}.estilo-listado-numerico ol li::marker{color:#b71731;font-weight:bold;font-size:1.1rem}.estilo-listado-circulo ul li::marker{color:#b71731;font-weight:bold;font-size:1.2rem}'
    })
});