<header id="page-topbar">
	<div class="navbar-header">
		<div class="container-fluid">
			<div class="float-start">
				<!-- LOGO -->
				<div class="navbar-brand-box">
					<a href="<?php echo base_url('/admin'); ?>" class="logo logo-light" style="padding-top: 6%;">
						<span class="logo-sm">
							<img src="<?php echo base_url("assets/themeAdmin/images/logo.png"); ?>" alt="" height="50">
						</span>
						<span class="logo-lg">
							<img src="<?php echo base_url("assets/themeAdmin/images/logo.png"); ?>" alt="" height="70">
						</span>
					</a>

					<a href="<?php echo base_url('/admin'); ?>" class="logo logo-dark" style="padding-top: 6%;"> 
						<span class="logo-sm">
							<img src="<?php echo base_url("assets/themeAdmin/images/logo2.png"); ?>" alt="" height="50">
						</span>
						<span class="logo-lg">
							<img src="<?php echo base_url("assets/themeAdmin/images/logo2.png"); ?>" alt="" height="70">
						</span>
					</a>
				</div>

				<button type="button" class="btn btn-sm px-3 font-size-24 d-lg-none header-item waves-effect waves-light" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
					<i class="mdi mdi-menu"></i>
				</button>
			</div>

			<div class="float-end">
				<div class="dropdown d-none d-lg-inline-block">
					<button type="button" class="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
						<i class="mdi mdi-fullscreen font-size-24"></i>
					</button>
				</div>
				
				<div class="dropdown d-inline-block">
					<button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<img class="rounded-circle header-profile-user" src="<?php echo base_url("assets/themeAdmin/images/user.png"); ?>" alt="Header Avatar">
					</button>
					<div class="dropdown-menu dropdown-menu-end">
						<!-- item-->
						<a class="dropdown-item" href="<?php echo base_url('admin'); ?>"><i class="mdi mdi-account-circle font-size-17 text-muted align-middle me-1"></i> Perfil</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item text-danger" href="/sesion/logout"><i class="mdi mdi-power font-size-17 text-muted align-middle me-1 text-danger"></i> Cerrar Sesión</a>
					</div>
				</div>

				<div class="dropdown d-inline-block">
					<button type="button" id="darkMode" onclick="cambiarModoActivo('dark')" class="btn header-item noti-icon right-bar-toggle waves-effect" >
						<i class="ion ion-md-sunny"></i>
					</button>
					<button type="button" id="lightMode" onclick="cambiarModoActivo('light')" class="btn header-item noti-icon right-bar-toggle waves-effect" style="display: none">
						<i class="ion ion-ios-moon"></i>
					</button>
				</div>

			</div>
		</div>
	</div>

	<!-- menu principal de la pagina -->
	<div class="top-navigation">
		<div class="page-title-content">
			<div class="container-fluid"></div>
		</div>

		<div class="container-fluid">
			<div class="topnav" >
				<nav class="navbar navbar-light navbar-expand-lg topnav-menu">

					<div class="collapse navbar-collapse" id="topnav-menu-content">
						<?php include APPPATH . "views/templates/admin/sidebar.php"; ?>
					</div>
				</nav>
			</div>
		</div>
	</div>
	<!-- menu principal de la pagina -->

</header>
<style>
	.card-footer {
		background-color: #5b626b;
	}
</style>