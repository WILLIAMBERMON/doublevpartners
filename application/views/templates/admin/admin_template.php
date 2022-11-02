<!doctype html>
<html lang="es">

<head>

    <meta charset="utf-8" />
    <title>Double V Partners</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Página deDouble V Partners" name="description" />
    <meta content="William Bermón" name="author" />
    <!-- App favicon -->
    <link href="<?php echo base_url("assets/themeAdmin/images/logo.png"); ?>" rel="shortcut icon">
    <!-- Bootstrap Css -->
    <link href="<?php echo base_url("assets/themeAdmin/css/bootstrap-dark.css"); ?>" id="bootstrap-style2" rel="stylesheet" type="text/css">
    <!-- App Css-->
    <link href="<?php echo base_url("assets/themeAdmin/css/app-dark.css"); ?>" id="app-style2" rel="stylesheet" type="text/css">
    <!-- Css que se cargan en config/template.php-->
    <?php echo $_css; ?>
    <style>.card {
        box-shadow: 0 -3px 31px 0 rgb(0 0 0 / 35%), 0 6px 20px 0 rgb(0 0 0 / 40%);
    }
    .bg-white{padding:20px;}
    #footer{
        position: absolute;
        bottom: 0;
        aling:center;
        background-color:#f5f5f5;
        color:black;
        width:100%;
    }
    @media screen and (max-width: 992px) {
    .separador{
        margin-top:50px;
    }
    }
    @media screen and (min-width: 1200px) {
    body[data-layout="horizontal"][data-layout-size="boxed"] .container-fluid {
        max-width: 90%;
    }
    }
    /*------------------------------------------------------------------
46. Loader Holder / .loader-holder
-------------------------------------------------------------------*/

.loader-holder {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    position: fixed;
    background-color: white;
}

.loader-holder .block {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
}

    </style>
</head>

<body data-topbar="light" data-layout="horizontal" data-layout-size="boxed">
    <!-- Begin page -->
    <div id="layout-wrapper">
 <!-- loader of the page -->
        
        <?php include APPPATH . "views/templates/admin/header.php"; ?>

        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->
        <div class="main-content separador">
            <div class="page-content px-0">
                <div class="bg-white">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12">
                                <?php foreach ($_content as $_view) : ?>
                                    <?php include $_view; ?>
                                <?php endforeach; ?>
                            </div>
                        </div>
                        <!-- end row -->
                    </div> <!-- container-fluid -->
                </div>
            </div>
            <!-- End Page-content -->
            <?php include APPPATH . "views/templates/admin/footer.php"; ?>
        </div>
        <!-- end main content-->
    </div>
    <!-- END layout-wrapper -->

    <?php echo $_js; ?>
    <script>
        
        function cambiarModoActivo(activo) {
            if (activo !== 'light') {
                document.getElementById("bootstrap-style2").href = "<?php echo base_url("assets/themeAdmin/css/bootstrap.css"); ?>";
                document.getElementById("app-style2").href = "<?php echo base_url("assets/themeAdmin/css/app.css"); ?>";
                $('#darkMode').attr("style", "display:none");
                $('#lightMode').attr("style", "display:");
            } else {
                $('#lightMode').attr("style", "display:none");
                $('#darkMode').attr("style", "display:");
                document.getElementById("bootstrap-style2").href = "<?php echo base_url("assets/themeAdmin/css/bootstrap-dark.css"); ?>";
                document.getElementById("app-style2").href = "<?php echo base_url("assets/themeAdmin/css/app-dark.css"); ?>";
            }
        }
        function minimizar(id, este) {
            var className = $('#' + id).hasClass('collapse')
            if (className) {
                $(este).html('<i style="color: white" class="fa fa-minus"></i>');
                $('#' + id).removeClass("collapse");
            } else {
                $(este).html('<i style="color: white" class="fa fa-plus"></i>');
                $('#' + id).addClass("collapse");
            }
        }
        </script>

    <?php if (isset($_success) && $_success) :
       $mensaje = explode("-", $_success[0]);
       $mens = preg_replace("/\r|\n/", "", $mensaje[0]);
       $titulo =  (isset($mensaje[1]))?(preg_replace("/\r|\n/", "", $mensaje[1])):''; 
        echo '<script>Mensaje.mostrarMsjExito("' . $titulo . '","' . $mens . '");</script>'; ?>
    <?php endif; ?>
    <?php if (isset($_info) && $_info) :
       $mensaje = explode("-", $_info[0]);
       $mens = preg_replace("/\r|\n/", "", $mensaje[0]);
       $titulo =  (isset($mensaje[1]))?(preg_replace("/\r|\n/", "", $mensaje[1])):'Información'; 
        echo '<script>Mensaje.mostrarMsjInfo("' . $titulo . '","' . $mens . '");</script>'; ?>
    <?php endif; ?>
    <?php if (isset($_error) && $_error) :
        $mensaje = explode("-", $_error[0]);
        $mens = preg_replace("/\r|\n/", "", $mensaje[0]);
        $titulo =  (isset($mensaje[1]))?(preg_replace("/\r|\n/", "", $mensaje[1])):'Error'; 
        echo '<script>Mensaje.mostrarMsjError("' . $titulo . '","' . $mens . '");</script>'; ?>
    <?php endif; ?>
    <?php if (isset($_warning) && $_warning) :
        $mensaje = explode("-", $_warning[0]);
        $mens = preg_replace("/\r|\n/", "", $mensaje[0]);
        $titulo =  (isset($mensaje[1]))?(preg_replace("/\r|\n/", "", $mensaje[1])):'Error'; 
        echo '<script>Mensaje.mostrarMsjWarning("' . $titulo . '","' . $mens . '");</script>'; ?>
    <?php endif; ?>
    <?php if (ENVIRONMENT == 'development') : ?>
        <div id="codeigniter_profiler" style="clear:both;background-color:#fff;padding:10px;border-top: 2px solid black">
            <h4><i class="fa fa-tachometer"></i> Monitor de consultas SQL</h4>
            <div class="table-responsive">
                <table class="table table-bordered table-hover table-condensed table-striped">
                    <?php $limite = count($this->session->queries); ?>
                    <?php $exec_time = 0; ?>
                    <?php for ($i = 0; $i < $limite; $i++) : ?>
                        <tr>
                            <td class="info">
                                <?php echo $this->session->query_time[$i]; ?>
                                <?php $exec_time += $this->session->query_time[$i]; ?>
                            </td>
                            <td>
                                <?php
                                $highlight = array('SELECT', 'DISTINCT', 'FROM', 'WHERE', 'AND', 'LEFT&nbsp;JOIN', 'ORDER&nbsp;BY', 'GROUP&nbsp;BY', 'LIMIT', 'INSERT', 'INTO', 'VALUES', 'UPDATE', 'OR&nbsp;', 'HAVING', 'OFFSET', 'NOT&nbsp;IN', 'IN', 'LIKE', 'NOT&nbsp;LIKE', 'COUNT', 'MAX', 'MIN', 'ON', 'AS', 'AVG', 'SUM', '(', ')');
                                $val = highlight_code($this->session->queries[$i]);
                                foreach ($highlight as $bold) {
                                    $val = str_replace($bold, '<strong>' . $bold . '</strong>', $val);
                                }
                                ?>
                                <?php echo $val; ?>
                            </td>
                        </tr>
                    <?php endfor; ?>
                    <tr>
                        <td class="success">
                            <?php echo $exec_time; ?>
                        </td>
                        <td>
                            TIEMPO DE EJECUCIÓN TOTAL (<?php echo $limite; ?> Consultas ejecutadas)
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    <?php endif; ?>
    <div class="modal fade" id="imagen-cargada" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div style="background-color: #b71731;color: white;" class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"><?php echo $area->nombre; ?></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="datos_imagen">
            </div>
        </div>
    </div>
</div>
</body>

</html>